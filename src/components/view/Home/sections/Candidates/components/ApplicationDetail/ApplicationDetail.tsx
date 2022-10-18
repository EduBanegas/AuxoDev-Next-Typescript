// Dependencies
import { useEffect } from 'react'
import Image from 'next/image'

// Styles - Components - Assets
import styles from './ApplicationDetail.module.scss'
import { Answer } from './components'
import CloseIcon from '@assets/icons/Close.png'

// Hooks - Actions
import { useAppDispatch } from '@hooks/useAppDispatch'
import { useAppSelector } from '@hooks/useAppSelector'
import { getCandidate } from '@redux/features/candidate/actions'
import { Loader, Message } from '@components/iu'

// Types
import { Video } from 'types'

interface Props {
	candidateId: number | null
	closeModal: (value: boolean) => void
}

function ApplicationDetail({ candidateId, closeModal }: Props): JSX.Element {
	const dispatch = useAppDispatch()

	const { candidate, isLoading, hasError } = useAppSelector(store => store.candidate)

	useEffect(() => {
		if (candidateId != null) dispatch(getCandidate(candidateId))
	}, [dispatch, candidateId])

	// Loading
	if (isLoading) {
		return (
			<div className={styles.applicationDetail}>
				<Loader />
			</div>
		)
	}

	// Error
	if (hasError) {
		return (
			<div className={styles.applicationDetail}>
				<div className={styles.closeIcon} onClick={() => closeModal(false)}>
					<Image src={CloseIcon} alt='Close Icon' />
				</div>

				<Message message='Hubo un error, intente nuevamente' />
			</div>
		)
	}

	// Apilcation Detail
	return (
		<div className={styles.applicationDetail}>
			<div className={styles.closeIcon} onClick={() => closeModal(false)}>
				<Image src={CloseIcon} alt='Close Icon' />
			</div>

			{/* Candidate Data */}
			<div className={styles.candidateData}>
				<p>{candidate?.name}</p>
				<p>ID {candidate?.id}</p>
			</div>

			{/* Answers List */}
			{candidate?.applicationId !== undefined ? (
				<>
					<h1>Respuestas del candidato</h1>

					<div className={styles.answersList}>
						{candidate?.videos?.map((video: Video) => {
							return <Answer key={video.questionId} video={video} />
						})}
					</div>
				</>
			) : (
				<Message className={styles.message} message='El Candidato No Aplicó' />
			)}
		</div>
	)
}

export default ApplicationDetail
