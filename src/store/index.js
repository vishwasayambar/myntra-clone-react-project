import { configureStore } from "@reduxjs/toolkit"
import itemSlice from "./itemSlice";
import fetchStatusSlice from "./fetchStatusSlice";

const myntraStore = configureStore({
    reducer:{
        items: itemSlice.reducer,
        fetchStatus: fetchStatusSlice.reducer,
    }
})


export default myntraStore;