import { configureStore } from '@reduxjs/toolkit'
import sliceReducer from './features/Slice'

export const store = configureStore({
  reducer: {
    counter: sliceReducer,
  },
})