'use client';

import { Place } from "@prisma/client";
import { SafeUser } from "@/app/types";
import Container from "@/app/components/Container";
import Image from "next/image";
import HeartButton from "../components/HeartButton";
import styles from "../../styles/components/FavoritesCard.module.scss"
import { GrLocation} from 'react-icons/gr'
import { useRouter } from "next/navigation";




interface FavoritesCardProps {
    data: Place;
    onAction?: (id:string) => void;
    disabled?: boolean;
    currentUser?: SafeUser | null;
}
const FavoritesCard: React.FC<FavoritesCardProps> =({
    data,
    onAction,
    disabled,
    currentUser
}) => {

    const router = useRouter();
    return (
        <div className={styles.gridChild} onClick={() => router.push(`/places/${data.id}`)}>
            <div className={styles.flexColumn}>
                <div className={styles.relative}>
                    <Image
                    fill
                    alt="Restaurant"
                    src={data.picture_url || ''}
                    style={{ width: '100%', height: '100%', objectFit:"cover" }}
                    />
                    <div className={styles.name}>
                        <p>{data.name}</p>
                    </div>
                    <div className={styles.url}>
                        <a href={data.www || ''}>Website</a>
                    </div>
                </div>
                <div className={styles.favorites}>
                    Remove from favorites
                    <HeartButton
                    placeId={data.id}
                    currentUser={currentUser}/>
                    </div>
            </div>
        </div>
       
      );
}
 
export default FavoritesCard;