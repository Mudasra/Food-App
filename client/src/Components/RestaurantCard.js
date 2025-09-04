const RestaurantCard = ({ name, image, rating, costForTwo, cuisines, locality, area }) => {
  return (
    <div className="flex">
      <div className="Res-card ">
      <img className="card-img" src={image} alt={name} />
      <div className="card-body">
        <h3 className="card-title">{name}</h3>
        <p className="card-cuisine">{cuisines}</p>
        <p className="text-sm text-gray-500">{costForTwo}</p>
        <p className="text-sm text-gray-500">{locality}, {area}</p>
        <p className="card-rating">⭐ {rating}</p>
      </div>
    </div>
    </div>
    
  );
};

export default RestaurantCard;


