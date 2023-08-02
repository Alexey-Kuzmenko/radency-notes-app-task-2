import { Outlet } from 'react-router-dom';
import styles from './Layout.module.scss';
import Header from '../Header/Header';
import Container from '../Container/Container';

const Layout = () => {
    return (
        <div className={styles.Layout}>
            <Header />
            <main style={{ paddingTop: '20vh' }}>
                <Container>
                    <Outlet />
                </Container>
            </main>
        </div>
    );
};

export default Layout;