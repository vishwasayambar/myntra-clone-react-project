import { useDispatch } from "react-redux";
import { bagSliceAction } from "../store/bagSlice";
import { FcPlus, FcDisapprove } from "react-icons/fc";

const AddRemoveFromBagButton = ({ type, item }) => {
  const dispatch = useDispatch();

  const handleAddTobag = () => {
    dispatch(bagSliceAction.addToBag(item.id));
  };

  const handleRemoveFrombag = () => {
    dispatch(bagSliceAction.removeFromBag(item.id));
  };

  return (
    <>
      {type === "ADD" ? (
        <button className="btn-add-bag" onClick={handleAddTobag}>
          <FcPlus />
          Add to Bag
        </button>
      ) : (
        type === "REMOVE" && (
          <button className="btn-remove-bag" onClick={handleRemoveFrombag}>
            <FcDisapprove /> Remove from Bag
          </button>
        )
      )}
    </>
  );
};

export default AddRemoveFromBagButton;
