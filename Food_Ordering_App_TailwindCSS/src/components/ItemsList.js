import { CDN_IMG_URL } from "../utils/constants";

const ItemsList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="p-2 m-2 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item?.card?.info?.name}</span>
              <span>
                {" "}
                - &#8377;{" "}
                {item?.card?.info?.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item?.card?.info?.description}</p>
          </div>
          <div className="w-3/12 p-2">
            <div className="absolute">
              <button className="px-3 py-1 mx-6 mt-20 rounded-lg text-green-400 bg-white shadow-lg">
                <b>ADD +</b>
              </button>
            </div>
            <img
              src={CDN_IMG_URL + item?.card?.info?.imageId}
              className="w-24"
              alt="no-image"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemsList;
