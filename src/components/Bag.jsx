import BagItem from "./BagItem";
import BagSummary from "./BagSummary";

const Bag = () => {
  return (
    <main>
      <div className="bag-page">
        <BagItem />
        <BagSummary />
      </div>
    </main>
  );
};

export default Bag;
