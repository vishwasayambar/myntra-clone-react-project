import { useSelector } from "react-redux";
import BagItem from "./BagItem";
import BagSummary from "./BagSummary";

const Bag = () => {

  const bag = useSelector(store => store.bag);
  const getAllItems = useSelector(store => store.items);

  const itemsInBag = getAllItems.filter((item) => {
    return bag.includes(item.id);
  });
  

  
  return (
    <main>
      <div className="bag-page">
       {itemsInBag.map(item =>  <BagItem key={item.key} item={item}/>)}
        <BagSummary />
      </div>
    </main>
  );
};

export default Bag;
