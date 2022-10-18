import axios from 'axios'
import { fetchCandidate, candidateFetched, errorFetchingCandidate } from '../candidate/reducer'

// Get One
export const getCandidate = (id: number) => async (dispatch: any) => {
	try {
		dispatch(fetchCandidate())

		// Candidate
		const { data: candidate } = await axios.get(`http://localhost:3001/candidates/${id}`)

		const { applicationId } = candidate

		// Application Detail
		if (applicationId !== undefined) {
			const { data: applicationDetail } = await axios.get(
				`http://localhost:3001/applications/${String(applicationId)}`
			)

			const { id, ...rest } = applicationDetail

			// Questions
			if (applicationDetail.videos.length > 0) {
				const questionsPromise = applicationDetail.videos.map(async (video: any) => {
					return await axios.get(
						`http://localhost:3001/questions/${String(video.questionId)}`
					)
				})

				const questionsResolve = await Promise.all(questionsPromise)

				const videosWithQuestions = applicationDetail.videos.map(
					(video: any, index: number) => {
						return { ...video, question: questionsResolve[index].data.question }
					}
				)

				return dispatch(
					candidateFetched({
						...candidate,
						...rest,
						applicationId: id,
						videos: videosWithQuestions
					})
				)
			}

			return dispatch(candidateFetched({ ...candidate, ...rest, applicationId: id }))
		}

		dispatch(candidateFetched(candidate))
	} catch (error) {
		console.log('Error: ', error)
		dispatch(errorFetchingCandidate())
	}
}

// Post Comment
