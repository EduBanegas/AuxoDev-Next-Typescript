import styles from './Loader.module.scss'

export default function Loader(): JSX.Element {
	return (
		<div className={styles.wrapper}>
			<div className={styles.loader}></div>
		</div>
	)
}
