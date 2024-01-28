import { useSelector } from "react-redux";
import AddRemoveFromBagButton from "./AddRemoveFromBagButton";

const HomeItem = ({ item }) => {
  const bag = useSelector((store) => store.bag);
  const isInBag = bag.includes(item.id);

  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {isInBag ? <AddRemoveFromBagButton type={'REMOVE'} item={item}/> : <AddRemoveFromBagButton type={'ADD'} item={item}/>}
    </div>
  );
};

export default HomeItem;
