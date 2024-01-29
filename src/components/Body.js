import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RESTAURANTS_LIST } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const [restaurantsList, setRestaurantsList] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () =>{
        const apiData = await fetch(RESTAURANTS_LIST);
        const json = await apiData.json();
        setRestaurantsList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false){
        return <h1>
            Looks like you're offline!! Please check your Internet Connection
        </h1>
    }

    return restaurantsList.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }} />
                    <button className="search-btn" onClick={()=>{
                        const filteredRestaurantsList = restaurantsList.filter(restaurant => restaurant.info.name.trim().toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredList(filteredRestaurantsList);
                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={()=>{
                    const filteredRestaurantsList = restaurantsList.filter(restaurant => restaurant.info.avgRating > 4);
                    setFilteredList(filteredRestaurantsList);
                }}>Top Rated Restaurants</button>
            </div>
            <div className="restaurant-container">
                {
                    filteredList?.map(restaurant => (
                    <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id} style={{ textDecoration: 'none', color:'black' }}><RestaurantCard restaurantData={restaurant} /></Link>
                    ))
                }
            </div>
        </div>
    );
};

export default Body;