import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FaqState {
    openIndex: number | null;
}

const initialState: FaqState ={
    openIndex: 0,
};

const faqSlice = createSlice({
    name:"faq",
    initialState,
    reducers:{
        toggleFaq:(state, action: PayloadAction<number>)=>{
            state.openIndex = state.openIndex === action.payload ? null : action.payload;
        },
    },
});

export const {toggleFaq} = faqSlice.actions;
export default faqSlice.reducer;
