import { createReducer } from '@reduxjs/toolkit'

import {
  _updatePhysicalLocality,
} from '../actions'

const physicalLocalities = createReducer({},
  {
    [_updatePhysicalLocality]: (state, { payload }) => ({ ...state, [payload.id]: payload }),
  },
)

export default physicalLocalities
