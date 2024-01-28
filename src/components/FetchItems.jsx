import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsAction } from "../store/itemSlice";
import { fetchStatusSliceAction } from "../store/fetchStatusSlice";

const FetchItems = () => {
// Headless Component which is only used for fetching data

  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(fetchStatusSliceAction.markFetchingStarted());
    fetch("http://localhost:8080/items", { signal })  
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(fetchStatusSliceAction.markFetchDone());
        dispatch(fetchStatusSliceAction.markFetchingEnd());
        dispatch(itemsAction.addInitialItems(items[0]));
      });
      
      return () => {
      controller.abort();
    };
  }, [fetchStatus]);

  return <></>;
};

export default FetchItems;
