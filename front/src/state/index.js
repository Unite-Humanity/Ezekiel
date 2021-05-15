import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'

import time from './reducers/time'
import physicalLocalities from './reducers/physicalLocalities'

const store = configureStore({
  reducer: combineReducers({
    time,
    physicalLocalities,
  }),
})

export default store
