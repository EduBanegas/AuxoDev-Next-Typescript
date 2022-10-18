import { createSlice } from '@reduxjs/toolkit'
import { CandidateState } from './types'

const initialState: CandidateState = {
	candidate: null,
	hasError: false,
	isLoading: false
}

const candidateSlice = createSlice({
	name: 'candidate',
	initialState,
	reducers: {
		fetchCandidate: state => {
			state.isLoading = true
			state.hasError = false
		},
		candidateFetched: (state, action) => {
			state.isLoading = false
			state.hasError = false
			state.candidate = action.payload
		},
		errorFetchingCandidate: state => {
			state.isLoading = false
			state.hasError = true
			state.candidate = null
		}
	}
})

export const { fetchCandidate, candidateFetched, errorFetchingCandidate } =
	candidateSlice.actions

export default candidateSlice.reducer
