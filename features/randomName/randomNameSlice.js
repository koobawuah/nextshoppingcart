import { createSlice } from "@reduxjs/toolkit"

const initialState= {
    name : 'Koobawuah'
}

export const randomNameSlice = createSlice({
    name: 'randomName',
    initialState,
    reducers: {
        updateName: (store) => {
            if(store.name === 'Koobawuah'){
                store.name = 'George' 
            } else {
                store.name = 'Koobawuah'
            }
        },
    },
})

export const { updateName } = randomNameSlice.actions
export default randomNameSlice.reducer
