import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MenuItem {
    menu: string,
    img: any,
    quantities: number,
    price: number //price ของแต่ละเมนู
}
interface MenuState {
    menuLists: MenuItem[]
    totalPrice: number //ราคารวทั้งหมด
}

const initialState: MenuState = {
    menuLists: [],
    totalPrice: 0 //initial value is 0
};

const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        addMenu: (state, action: PayloadAction<MenuItem>) => {
            const configSameMenu = state.menuLists.findIndex(
                (item) => item.menu === action.payload.menu
            )
            //findIndex --- if not founed then return -1
            //config if the same menu
            if (configSameMenu !== -1) {
                state.menuLists[configSameMenu].quantities += 1;
            } else {
                state.menuLists.push(action.payload);
            }
            console.log(state.menuLists)

            // คำนวณราคาทั้งหมดใหม่
            state.totalPrice = state.menuLists.reduce((sum, item) => 
                sum + (item.quantities * item.price), 0);
        },
        decreaseQuantityMenu: (state, action: PayloadAction<string>) => {
            const existIndexMenu = state.menuLists.findIndex(
                (item) => item.menu === action.payload
            );

            if (existIndexMenu !== -1) {
                state.menuLists[existIndexMenu].quantities -= 1;
            }
            console.log(state.menuLists)

            // คำนวณราคาทั้งหมดใหม่
            state.totalPrice = state.menuLists.reduce((sum, item) => 
                sum + (item.quantities * item.price), 0);
        },
        removeMenu: (state, action: PayloadAction<string>) => {
            state.menuLists = state.menuLists.filter(
                (item) => item.menu !== action.payload
            )
            console.log(state.menuLists)
            
            // คำนวณราคาทั้งหมดใหม่
            state.totalPrice = state.menuLists.reduce((sum, item) => 
                sum + (item.quantities * item.price), 0);
        },
        setPrice: (state, action: PayloadAction<number>) => {
            state.totalPrice = action.payload;
        }
    }
});

export const { addMenu, removeMenu, decreaseQuantityMenu, setPrice} = menuSlice.actions;

export default menuSlice.reducer;