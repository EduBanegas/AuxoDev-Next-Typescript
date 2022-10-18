// Dependencies
import React, { useState } from 'react'

// Styles
import styles from './Answer.module.scss'

// Types
import { Video, Comment } from 'types'

interface Props {
	video: Video
}

export default function Answer({ video }: Props): JSX.Element {
	const [error, setError] = useState<boolean>(false)
	const [commentInfo, setCommentInfo] = useState<Comment>({
		owner: '',
		comment: ''
	})

	// OnChanges
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setCommentInfo({ ...commentInfo, [e.target.name]: e.target.value })
	}

	const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
		setCommentInfo({ ...commentInfo, [e.target.name]: e.target.value })
	}

	// Submit
	const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
		e.preventDefault()

		if (commentInfo.owner === '' && commentInfo.comment === '') return setError(true)

		setError(false)
		setCommentInfo({
			owner: '',
			comment: ''
		})

		alert('Guardado')
	}

	return (
		<div className={styles.answer}>
			<div className={styles.questionAndAnswer}>
				<h4>{video.question}</h4>

				<video src={video.src}></video>
			</div>

			{/* Comments List */}
			<div className={styles.comments}>
				<h6>Comentarios</h6>
				{video.comments.length > 0 ? (
					video.comments.map((comment: Comment, index: number) => {
						return (
							// Comment
							<div key={comment.id} className={styles.comment}>
								<p> {comment.owner} </p>
								<p> {comment.comment} </p>
							</div>
						)
					})
				) : (
					<div className={styles.comment}>
						<p>No hay comentarios</p>
					</div>
				)}
			</div>

			{/* Post Comment */}
			<div className={styles.postComment}>
				<h6>Publicar Comentario</h6>

				<form className={styles.form}>
					<div className={styles.inputContainer}>
						<label htmlFor='owner'>Nombre</label>
						<input
							className={styles.input}
							type='text'
							name='owner'
							onChange={handleInputChange}
							value={commentInfo.owner}
							id='owner'
							placeholder='Ingrese un nombre'
						/>
					</div>

					<div className={styles.inputContainer}>
						<label htmlFor='comment'>Comentario</label>

						<textarea
							className={`${styles.input} ${styles.textarea}`}
							name='comment'
							onChange={handleTextareaChange}
							value={commentInfo.comment}
							id='comment'
							placeholder='Ingrese su comentario'
						/>
					</div>

					{error && (
						<p className={styles.errorMessage}>Debe llenar todos los campos</p>
					)}

					<button onClick={handleClick}>
						<p>Guardar</p>
					</button>
				</form>
			</div>
		</div>
	)
}
