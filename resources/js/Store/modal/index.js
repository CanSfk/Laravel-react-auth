import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    name: false
}

const modal = createSlice({
    initialState,
    name: 'modal',
    reducers: {
        _setModal: (state, action) => {
            state.name = action.payload
        },
        _removeModal: (state) => {
            state.name = false;
        }
    }
})

export const {_removeModal, _setModal} = modal.actions;
export default modal.reducer;
