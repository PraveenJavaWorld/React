import { CDN_IMG_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {restaurantData} = props;
    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla} = restaurantData?.info;
    return (
        <div className="restaurant-card">
            <img className="restaurant-logo" alt="no-logo" src={CDN_IMG_URL+cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating+ " Rating"}</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.slaString}</h4>
        </div>
    );
};

export default RestaurantCard;