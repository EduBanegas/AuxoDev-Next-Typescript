// Styles - Components
import styles from './Home.module.scss'
import { Header } from '@components/common'
import { CandidatesSection } from './sections'

export default function Home(): JSX.Element {
	return (
		<div className={styles.home}>
			<Header />

			{/* Sections */}
			<CandidatesSection />
		</div>
	)
}
