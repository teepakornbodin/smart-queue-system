import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MenuItem {
    menu: string,
    img: any,
    quantities: number
}
interface MenuState {
    menuLists: MenuItem[]
}

const initialState: MenuState = {
    menuLists: []
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
        },
        decreaseQuantityMenu: (state, action: PayloadAction<string>) => {
            const indexMenu = state.menuLists.findIndex(
                (item) => item.menu === action.payload
            );

            if (indexMenu !== -1) {
                state.menuLists = state.menuLists.map((item, index) => {
                    if (index === indexMenu) {
                        return {
                            ...item,
                            quantities: item.quantities > 1 ? item.quantities - 1 : 1,
                        };
                    }
                    return item;
                });
            }
        },
        removeMenu: (state, action: PayloadAction<string>) => {
            state.menuLists = state.menuLists.filter(
                (item) => item.menu !== action.payload
            )
        },
        clearMenu: (state) => {
            state.menuLists = []
        }
    }
});

export const { addMenu, removeMenu, decreaseQuantityMenu, clearMenu } = menuSlice.actions;

export default menuSlice.reducer;