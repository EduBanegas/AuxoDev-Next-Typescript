// Dependencies
import { useRef, useState } from 'react'

// Styles - Components
import styles from './Candidates.module.scss'
import { Modal } from '@components/common'
import { ApplicationDetail, List } from './components'

export default function Candidates(): JSX.Element {
	// Modal
	const [open, setOpen] = useState<boolean>(false)

	const candidateIdRef = useRef<number | null>(null)

	const openModal = (candidateId: number): void => {
		setOpen(true)

		candidateIdRef.current = candidateId
	}

	return (
		<section className={styles.candidates}>
			<h4>Lista de candidatos</h4>
			<List openModal={openModal} />

			{/* Modal */}
			{open && (
				<Modal>
					<ApplicationDetail
						candidateId={candidateIdRef.current}
						closeModal={setOpen}
					/>
				</Modal>
			)}
		</section>
	)
}
