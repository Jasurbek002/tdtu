import Link from 'next/link';
import styles from '../styles/navbar.module.scss'

const Navbar = () => {
    return (
        <div className={styles.Navbar}>
              <ul className={styles.Navbar__nav}>
                <li className={styles.Navbar__nav__item}>
                    <Link className={styles.Navbar__nav__item__link} href='/' >Home</Link>
                </li>
                <li className={styles.Navbar__nav__item}>
                    <Link className={styles.Navbar__nav__item__link} href='/daktarantura' >Doktarantura</Link>
                </li>
                <li className={styles.Navbar__nav__item}>
                    <Link className={styles.Navbar__nav__item__link} href='/magistratura' >Magistratura</Link>
                </li>
                <li className={styles.Navbar__nav__item}>
                    <Link className={styles.Navbar__nav__item__link} href='/grand' > Reyting </Link>
                </li>
                <li className={styles.Navbar__nav__item}>
                    <Link className={styles.Navbar__nav__item__link} href='/ilmiy' >Ilmiy loyihalar</Link>
                </li>
                <li className={styles.Navbar__nav__item}>
                    <Link className={styles.Navbar__nav__item__link} href='/ilmiy' >Ilmiy maqolalar</Link>
                </li>
                <li className={styles.Navbar__nav__item}>
                    <Link className={styles.Navbar__nav__item__link} href='/ilmiy' >Ilmiy jurnallar</Link>
                </li>
                <li className={styles.Navbar__nav__item}>
                    <Link className={styles.Navbar__nav__item__link} href='/ilmiy' >INNO Texnopark</Link>
                </li>
               </ul>    
        </div>
    );
}

export default Navbar;
