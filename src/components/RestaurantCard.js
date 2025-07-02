const RestaurantCard = ({ resData }) => {
  const { resname, cuisine, Rating, Cost, img } = resData;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img src={img} alt={resname} />
      <h3>{resname}</h3>
      <h4>{cuisine}</h4>
      <h4>⭐ {Rating}</h4>
      <h4>{Cost}</h4>
    </div>
  );
};

export default RestaurantCard;
