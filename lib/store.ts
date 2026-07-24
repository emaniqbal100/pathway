import { configureStore } from "@reduxjs/toolkit";
import faqReducer from "./features/faqSlice";


export  const store = configureStore({
    reducer:{
        faq: faqReducer,
    },
});

export type RootState= ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
