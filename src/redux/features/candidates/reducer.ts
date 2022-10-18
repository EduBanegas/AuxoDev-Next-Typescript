import { createSlice } from '@reduxjs/toolkit'
import { CandidatesState } from './types'

const initialState: CandidatesState = {
	candidates: [],
	hasError: false,
	isLoading: false
}

const candidatesSlice = createSlice({
	name: 'candidates',
	initialState,
	reducers: {
		fetchCandidates: state => {
			state.isLoading = true
		},
		candidatesFetched: (state, action) => {
			state.isLoading = false
			state.candidates = action.payload
		},
		errorFetchingCandidates: state => {
			state.isLoading = false
			state.hasError = true
		}
	}
})

export const { fetchCandidates, candidatesFetched, errorFetchingCandidates } =
	candidatesSlice.actions

export default candidatesSlice.reducer
