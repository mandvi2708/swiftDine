import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    try {
      const data = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6537796&lng=77.38699&restaurantId=${resId}`
      );
      const json = await data.json();
      setResInfo(json.data);
    } catch (err) {
      console.error("Failed to fetch menu:", err);
    }
  };
  if (!resInfo) return <Shimmer />;
  const infoCard = resInfo?.cards?.find((card) => card?.card?.card?.info);
  const { name, cuisines, costForTwoMessage, cloudinaryImageId } =
    infoCard?.card?.card?.info || {};
  const regularCards =
    resInfo?.cards?.find((card) => card?.groupedCard)?.groupedCard
      ?.cardGroupMap?.REGULAR?.cards;
  const itemCards =
    regularCards?.find((c) => c?.card?.card?.itemCards)?.card?.card
      ?.itemCards || [];
  return (
    <div className="menu">
      <div className="restaurant-info">
        <img
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_600/${cloudinaryImageId}`}
          alt={name}
          className="restaurant-banner"
        />
        <h1>{name}</h1>
        <p className="cuisines">{cuisines?.join(", ")}</p>
        <p className="cost">{costForTwoMessage}</p>
      </div>

      <h2 className="menu-heading">Menu</h2>
      <ul className="menu-items">
        {itemCards.length === 0 ? (
          <p>No items available.</p>
        ) : (
          itemCards.map((item) => {
            const info = item.card.info;
            return (
              <li className="menu-item" key={info.id}>
                <span>{info.name}</span>
                <span className="price">
                  ₹{(info.price || info.defaultPrice || 0) / 100}
                </span>
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
