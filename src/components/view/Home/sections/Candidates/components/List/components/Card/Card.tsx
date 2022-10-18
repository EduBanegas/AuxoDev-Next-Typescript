// Dependencies
import React from 'react'
import Image from 'next/image'
import { Candidate } from 'types/candidate'

// Styles - Components - Assets
import styles from './Card.module.scss'
import profileDefault from '@assets/images/DefaultProfile.jpg'

interface Props {
	candidate: Candidate
	openModal: (candidateId: number) => void
}

export default function Card({ candidate, openModal }: Props): JSX.Element {
	return (
		<div className={styles.card} onClick={() => openModal(candidate.id)}>
			<div className={styles.profileAndName}>
				<div className={styles.profile}>
					<Image
						className={styles.image}
						width={'100%'}
						height={'100%'}
						src={
							candidate.profile !== undefined ? candidate.profile : profileDefault
						}
						alt='Perfil'
					/>
				</div>

				<p className={styles.name}>{candidate.name}</p>
			</div>

			<p>{candidate.id}</p>
		</div>
	)
}
