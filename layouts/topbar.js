import Image from 'next/image'
import Link from 'next/link';
import styles from './../styles/topbar.module.scss'

import logo from '../public/assets/images/LOGO.png'
const Topbar = () => {
    return (
 
            <div className={styles.Topbar}>
                <Link className={styles.Topbar__logo} href='/'>
                    <Image className={styles.Topbar__logo__img} src={logo} alt='logotip image' />
                </Link>
                <h2 className={styles.Topbar__title}>
                    Islom Karimov nomidagi toshkent davlat texnika universitetining
                    ilmiy-tadqiqot izlanishlarini yoritib boruvchi sayt
                </h2>
                <select defaultValue='uz' name='lang' className={styles.Topbar__lang}>
                    <option value='en' >en</option>
                    <option value='ru' >ru</option>
                    <option value='uz'>uz</option>
                </select>
            </div>

    );
}

export default Topbar;
