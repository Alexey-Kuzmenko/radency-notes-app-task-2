interface ContainerProps {
    children?: JSX.Element[] | JSX.Element
}

const Container: React.FC<ContainerProps> = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default Container;