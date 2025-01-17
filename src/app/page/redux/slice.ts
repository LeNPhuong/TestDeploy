"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface dataprd {
    quantity: number;
    name: string;
    image: string;
    description: string;
    slugkey: string;
    category: string;
    _id: string;
}

const initialState = {
    cart: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        // them san pham
        add: (state, actions: PayloadAction<dataprd>) => {
            const result: dataprd = actions.payload;
            if (state.cart.length === 0) {
                state.cart.push({ ...result, quantity: 1 } as never);
            } else {
                if (state.cart.some((e: any) => e._id === result._id)) {
                    state.cart.map((e: any) => (e._id === result._id ? (e.quantity += 1) : e));
                } else {
                    state.cart.push({ ...result, quantity: 1 } as never);
                }
            }
        },

        // xoa san pham
        remove: (state, actions: PayloadAction<{}>) => {
            const result = actions.payload;
            state.cart = state.cart.filter((e: any) => e._id !== result);
        },

        // cong san pham
        plus: (state, actions: PayloadAction<{}>) => {
            const result = actions.payload;
            state.cart.map((e: any) => (e._id === result ? (e.quantity += 1) : e));
        },

        // tru san pham
        minus: (state, actions: PayloadAction<{}>) => {
            const result = actions.payload;
            state.cart.map((e: any) =>
                e._id === result ? (e.quantity > 1 ? (e.quantity -= 1) : (e.quantity = e.quantity = 1)) : e,
            );
        },
    },
});

export const { add, remove, plus, minus } = cartSlice.actions;

export default cartSlice.reducer;
