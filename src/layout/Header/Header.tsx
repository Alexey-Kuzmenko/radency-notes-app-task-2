import Container from '../Container/Container';
import styles from './Header.module.scss';
import Links from './link.type';
import { NavLink } from 'react-router-dom';

const links: Links[] = [{ href: 'notes' }, { href: 'notes-archive', label: 'archive' }];

const Header = () => {

    const renderLinks = (): JSX.Element[] => {
        return links.map(({ href, label }: Links, i) => {
            return <NavLink
                key={i}
                to={href}
                className={styles.Header__menuLink}
            >
                {label ? label : href}
            </NavLink>;
        });
    };

    return (
        <header className={styles.Header}>
            <Container>

                <div className={styles.Header__innerFlexContainer}>

                    <p className={styles.Header__logo}>Note App</p>

                    <div className={styles.Header__menu}>
                        <nav className={styles.Header__menuBody}>
                            <div className={styles.Header__menuList}>
                                {renderLinks()}
                            </div>
                        </nav>
                    </div>

                </div>

            </Container>
        </header>
    );
};

export default Header;