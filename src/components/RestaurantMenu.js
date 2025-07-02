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
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6537796&lng=77.38699&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
      );
      const json = await data.json();
      setResInfo(json.data);
    } catch (err) {
      console.error("Failed to fetch menu:", err);
    }
  };

  if (!resInfo) return <Shimmer />;

  // Get restaurant info
  const infoCard = resInfo?.cards?.find(
    (card) => card?.card?.card?.info
  );
  const {
    name,
    cuisines,
    costForTwoMessage,
  } = infoCard?.card?.card?.info || {};

  // Get menu items (from REGULAR section)
  const regularCards =
    resInfo?.cards?.find((card) => card?.groupedCard)?.groupedCard
      ?.cardGroupMap?.REGULAR?.cards;

  const itemCards =
    regularCards
      ?.find((c) => c?.card?.card?.itemCards)
      ?.card?.card?.itemCards || [];

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{cuisines?.join(", ")}</h3>
      <h3>{costForTwoMessage}</h3>

      <h2>Menu</h2>
      {itemCards.length === 0 ? (
        <p>No menu items available.</p>
      ) : (
        <ul>
          {itemCards.map((item) => {
            const info = item.card.info;
            return (
              <li key={info.id}>
                {info.name} - ₹
                {(info.price || info.defaultPrice || 0) / 100}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default RestaurantMenu;
