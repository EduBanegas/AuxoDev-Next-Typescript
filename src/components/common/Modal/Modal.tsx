import styles from './Modal.module.scss'

interface Props {
	children: React.ReactNode
}

export default function Modal({ children }: Props): JSX.Element {
	return <div className={styles.modal}>{children}</div>
}
