import styles from './Message.module.scss'

interface Props {
	message: string
	className?: string
}

export default function Message({ message, className }: Props): JSX.Element {
	return (
		<div className={`${styles.wrapper} ${className !== undefined ? className : ''}`}>
			<p className={styles.message}>{message}</p>
		</div>
	)
}
