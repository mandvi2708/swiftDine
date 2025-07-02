import RestaurantCard from './RestaurantCard';
import { useState, useEffect } from 'react';
import Shimmer from './Shimmer';

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

    useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const data = await fetch( 
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6288071&lng=77.1319777&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();

      // Use optional chaining and fallback to empty array
      const restaurants =
        json?.data?.cards?.find(
          (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
        )?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

      const cleanedRestaurants = restaurants.map((restaurant) => ({
        resname: restaurant.info.name,
        cuisine: restaurant.info.cuisines.join(", "),
        Rating: restaurant.info.avgRating,
        Cost: restaurant.info.costForTwo,
        id: restaurant.info.id,
        img: `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300/${restaurant.info.cloudinaryImageId}`,
      }));
      console.log(cleanedRestaurants)

      setListOfRestaurants(cleanedRestaurants);
      setFilteredRestaurant(cleanedRestaurants);
    } catch (error) {
      console.error("Failed to fetch restaurant data", error);
    }
  };

  if (listOfRestaurants.length === 0) {
    return <Shimmer/>
   
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input 
          type="text"
           className="search-box" 
           value ={searchText}
          onChange={(e)=>{
            setSearchText(e.target.value) ;
          }}
          onKeyDown={(e)=>{
            if(e.key=== "Enter"){
              const filteredRestaurants = listOfRestaurants.filter((restaurant) =>
        restaurant.resname.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurant(filteredRestaurants);
            }

          }}/>
          <button
           onClick={()=> {
           const filteredRestaurants = listOfRestaurants.filter((restaurant) =>
            restaurant.resname.toLowerCase().includes(searchText.toLowerCase())
          );
          setFilteredRestaurant(filteredRestaurants);
               
          }}>Search</button>

        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
             (res) => !isNaN(parseFloat(res.Rating)) && parseFloat(res.Rating) > 4.5
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
          
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant,index) => (
          <RestaurantCard obj={restaurant}  abc={index} key={index}/>
        ))}
      </div>
    </div>
  );
};

export default Body;
