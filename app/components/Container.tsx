'use client';
import styles from '../../styles/components/Container.module.scss';

interface ContainerProps {
    children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
    return (
        <div className={styles.container}>
        {children}
        </div>
    )
}


export default Container;

