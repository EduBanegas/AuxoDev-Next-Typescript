import { combineReducers } from '@reduxjs/toolkit'

// Reducers
import candidates from './candidates/reducer'
import candidate from './candidate/reducer'

const rootReducers = combineReducers({
	candidates,
	candidate
})

export default rootReducers
