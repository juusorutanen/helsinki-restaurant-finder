'use client'
import styles from '../../../styles/components/Categories.module.scss'
import Container from '../Container';
import CategoryBox from '../CategoryBox';
import { FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import { GiTacos} from 'react-icons/gi'
import { useSearchParams, usePathname } from 'next/navigation';


export const categories = [
    {
        label: 'Pizza',
        icon: FaPizzaSlice,
        description: 'This place has pizza!'
    },
    {
        label: 'Burger',
        icon: FaHamburger,
        description: 'This place has burgers!'
    },
    {
        label: 'Mexican',
        icon: GiTacos,
        description: 'This place has tacos!'
    }
]


const Categories = () => {
    const params = useSearchParams();
    const category = params?.get('category')
    const pathname = usePathname();

    const isMainPage = pathname === '/';

    if (!isMainPage) {
        return null;
    }
    return ( 
        <Container>
            <div className={styles.flexContainer}>
                {categories.map((item) => (
                    <CategoryBox
                    key={item.label}
                    label={item.label}
                    selected={category === item.label}
                    icon={item.icon}
                    />
                ))}
            </div> 
        </Container>
    );
}
 
export default Categories;