
const RestaurantCard = (props) => {
    const { obj, abc } = props;
    const {resname, cuisine, Rating, Cost, img} = obj;
    // const idx = `card_${abc}`
    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
            <img src={img} alt={resname} id={ `cardddd_${abc}` }/>
            <h3>{resname}</h3>
            <h4>{cuisine}</h4>
            <h4>{Rating}</h4>
            <h4>{Cost}</h4>
        </div>
    );
};
export default RestaurantCard;

