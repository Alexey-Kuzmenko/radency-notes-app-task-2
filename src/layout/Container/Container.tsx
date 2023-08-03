import styles from './Container.module.scss';

interface ContainerProps {
    children?: JSX.Element[] | JSX.Element
}

const Container: React.FC<ContainerProps> = ({ children }) => {
    return (
        <div className={styles.Container}>
            {children}
        </div>
    );
};

export default Container;