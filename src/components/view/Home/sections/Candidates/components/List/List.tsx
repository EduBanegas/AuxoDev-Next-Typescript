// Dependencies
import { useEffect } from 'react'

// Hooks - Actions
import { useAppDispatch } from '@hooks/useAppDispatch'
import { useAppSelector } from '@hooks/useAppSelector'
import { getAllCandidates } from '@redux/features/candidates/actions'

// Styles - Components
import styles from './List.module.scss'
import { Card } from './components'
import { Loader, Message } from '@components/iu'

interface Props {
	openModal: (candidateId: number) => void
}

export default function List({ openModal }: Props): JSX.Element {
	const dispatch = useAppDispatch()

	const { candidates, isLoading, hasError } = useAppSelector(store => store.candidates)

	useEffect(() => {
		dispatch(getAllCandidates())
	}, [dispatch])

	// Loading
	if (isLoading) return <Loader />

	// Error
	if (hasError) return <Message message='Hubo un error, intente nuevamente' />

	if (candidates.length === 0) return <Message message='Empty List' />

	return (
		// Candidates list
		<div className={styles.list}>
			{candidates.map(candidate => {
				return <Card candidate={candidate} openModal={openModal} key={candidate.id} />
			})}
		</div>
	)
}
