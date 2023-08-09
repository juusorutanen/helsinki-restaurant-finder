'use client';

import { IconType } from "react-icons";
import styles from '../../styles/components/CategoryBox.module.scss'
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import qs from "query-string";

interface CategoryBoxProps {
    icon:IconType;
    label:string;
    selected?: boolean;
}



const CategoryBox: React.FC<CategoryBoxProps> = ({
    icon: Icon,
    label,
    selected


}) => {
    const router = useRouter();
    const params = useSearchParams();

    const handleClick = useCallback(() => {
        let currentQuery = {};
    
        if (params) {
            currentQuery = qs.parse(params.toString());
        }
    
        const updatedQuery: any = {
            ...currentQuery,
            category: label // Use a consistent query parameter name, like 'category'
        }
    
        if (params?.get('category') === label) {
            delete updatedQuery.category;
        }
    
        const url = qs.stringifyUrl({
            url: '/',
            query: updatedQuery
        }, { skipNull: true });
    
        router.push(url);
    }, [label, params, router]);
    
    return ( 
        <div onClick={handleClick} className={styles.flexContainer}
        style={selected ? {borderBottom: "1px solid orange" ,color:"orange"} : {borderBottom: "none"}}>
            <Icon size={26}/>
        <div className={styles.label}>
            {label}
        </div>
        </div>
     );
}
 
export default CategoryBox;