import {createSlice} from "@reduxjs/toolkit";


interface IInitState {
    id: number | unknown,
    firstName: string,
    secondName: string,
    iin: string,
    position: string,
    date: string,
    phone: string,
    street: string,
    floor: number | null,
    building: string,
    apartment: string,
    index: string


}


const initialState: IInitState = {
    id: null,
    firstName: '',
    secondName: '',
    iin: '',
    position: '',
    date: '',
    phone: '',
    street: '',
    floor: null,
    building: '',
    apartment: '',
    index: ''
}

const staffSlice = createSlice({
    name: 'staff/',
    initialState,
    reducers: {
        setOneStaff: (state, {payload}) => {
            state.id = payload.id
            state.firstName = payload.firstName
            state.secondName = payload.secondName
            state.iin = payload.iin
            state.position = payload.user.roles[0].value


        },
        setMoreInfoForOneStaff: (state, {payload}) => {
            state.date = payload.date
            state.phone = payload.user.phone
            state.street = payload.place.street
            state.floor = payload.place.floor
            state.building = payload.place.building
            state.apartment = payload.place.apartment
            state.index = payload.place.index

        },


    }
})

export const {setOneStaff,setMoreInfoForOneStaff} = staffSlice.actions

export default staffSlice.reducer