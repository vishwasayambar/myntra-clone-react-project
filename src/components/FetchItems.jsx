import { useEffect } from "react";
import { useSelector } from "react-redux";

const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);

  useEffect(() => {
    if (fetchStatus.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;

    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json)
      .then((item) => {
        console.log("@@@@@", item);
      });

    return () => {
      controller.abort();
    };
  }, [fetchStatus]);

  return <div>fetchItems</div>;
};

export default FetchItems;
