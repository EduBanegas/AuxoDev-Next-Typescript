import { Candidate } from '../../../types/candidate'

export interface CandidateState {
	candidate: Candidate | null
	hasError: boolean
	isLoading: boolean
}
