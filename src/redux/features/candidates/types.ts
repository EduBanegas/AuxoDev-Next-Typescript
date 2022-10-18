import { Candidate } from '../../../types/candidate'

export interface CandidatesState {
	candidates: Candidate[]
	hasError: boolean
	isLoading: boolean
}
