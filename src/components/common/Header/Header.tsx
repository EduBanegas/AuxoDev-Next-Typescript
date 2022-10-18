// styles - assets
import styles from './Header.module.scss'
import Logo from '@assets/images/Logo.png'
import Image from 'next/image'

export default function Header(): JSX.Element {
	return (
		<header className={styles.header}>
			<div>
				<Image src={Logo} alt='Logo' />
			</div>
		</header>
	)
}
