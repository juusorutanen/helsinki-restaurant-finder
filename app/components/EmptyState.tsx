'use client';
import styles from '../../styles/components/EmptyState.module.scss';
import Heading from './Heading';
import Button from './Button';
import { useRouter } from "next/navigation";

interface EmptyState {
    title?: string;
    subtitle?: string;
    showReset?: boolean;
}

const EmptyState:React.FC<EmptyState> = ({
    title = "No exact matches",
    subtitle = "Try changing your filters",
    showReset
}) => {
    const router = useRouter();
    return ( 
        <div className={styles.flexContainer}>
            <Heading center title={title}
            subtitle={subtitle}/>
            <div className={styles.reset}>
                {showReset && (
                    <Button
                    outline
                    label="Remove all filters"
                    onClick={() => router.push('/')}
                    />
                )}
            </div>
        </div>
     );
}
 
export default EmptyState;