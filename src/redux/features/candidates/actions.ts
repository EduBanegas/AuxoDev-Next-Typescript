import axios from 'axios'
import {
	fetchCandidates,
	candidatesFetched,
	errorFetchingCandidates
} from '@redux/features/candidates/reducer'

export const getAllCandidates = () => async (dispatch: any, getState: any) => {
	try {
		dispatch(fetchCandidates())

		const { data } = await axios.get('http://localhost:3001/candidates')

		dispatch(candidatesFetched(data))
	} catch (error) {
		console.log('Error: ', error)
		dispatch(errorFetchingCandidates())
	}
}
