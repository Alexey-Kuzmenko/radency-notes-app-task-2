import { Outlet } from 'react-router-dom';
import styles from './Layout.module.scss';
import Header from '../Header/Header';
import Container from '../Container/Container';
import { useAppSelector } from '../../hooks';

const Layout = () => {
    const menuIsOpen = useAppSelector((state) => state.menu.menuIsOpen);
    return (
        <div className={styles.Layout}>
            <Header />
            <main style={{ paddingTop: '20vh', paddingBottom: '10vh', visibility: menuIsOpen ? 'hidden' : 'visible' }}>
                <Container>
                    <Outlet />
                </Container>
            </main>
        </div>
    );
};

export default Layout;