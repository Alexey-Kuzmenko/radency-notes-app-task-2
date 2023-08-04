import Container from '../Container/Container';
import styles from './Header.module.scss';
import Links from './link.type';
import { NavLink } from 'react-router-dom';
import { MenuToggle } from '../../components';
import cn from 'classnames';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { closeMenu, toggleMenu } from '../../store/menuSlice';

const links: Links[] = [{ href: 'notes' }, { href: 'notes-archive', label: 'archive' }];

const Header = () => {
    const menuIsOpen = useAppSelector((state) => state.menu.menuIsOpen);
    const dispatch = useAppDispatch();

    const onMenuToggleClickHandler = () => {
        dispatch(toggleMenu());
    };

    const onMenuLinkClickHandler = () => {
        dispatch(closeMenu());
    };

    const renderLinks = (): JSX.Element[] => {
        return links.map(({ href, label }: Links, i) => {
            return <NavLink
                key={i}
                to={href}
                className={styles.Header__menuLink}
                onClick={onMenuLinkClickHandler}
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

                        <MenuToggle onClickHandler={onMenuToggleClickHandler} />

                        <nav className={cn(styles.Header__menuBody, {
                            [styles.Header__menuBody_open]: menuIsOpen === true
                        })}>
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