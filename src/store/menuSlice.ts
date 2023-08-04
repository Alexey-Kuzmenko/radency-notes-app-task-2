import { createSlice } from '@reduxjs/toolkit';

interface navState {
    menuIsOpen: boolean
}

const initialState: navState = {
    menuIsOpen: false
};

const menuSlice = createSlice({
    name: 'navigation',
    initialState,
    reducers: {
        closeMenu: (state) => {
            state.menuIsOpen = false;
        },
        toggleMenu: (state) => {
            state.menuIsOpen = !state.menuIsOpen;
        }
    }
});

export const { closeMenu, toggleMenu } = menuSlice.actions;

export default menuSlice.reducer;