import {createSlice} from "@reduxjs/toolkit";

interface IInitState {
    isShowPrevButton:boolean,
    isOneUserMessage:boolean
}

const initialState: IInitState = {
   isShowPrevButton:false,
    isOneUserMessage:false

}

const complaintSlice = createSlice({
    name: 'complaint/',
    initialState,
    reducers: {

        setButtonVisibility: (state,{payload}) => {
            state.isShowPrevButton = payload
        },
        setOneUserMessageVisibility: (state, {payload}) => {
            state.isOneUserMessage = payload
        }

    }
})

export const {setButtonVisibility,setOneUserMessageVisibility} = complaintSlice.actions

export default complaintSlice.reducer