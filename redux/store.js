import { configureStore } from '@reduxjs/toolkit'
import randomNameSlice from '../features/randomName/randomNameSlice';


const store = configureStore({
    reducer: randomNameSlice,
})


export default store;
