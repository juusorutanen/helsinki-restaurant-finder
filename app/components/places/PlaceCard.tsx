'use client';

import { Place } from "@prisma/client";
import { SafeUser } from "@/app/types";
import { useRouter } from "next/navigation";
import Image from "next/image";
import HeartButton from "../HeartButton";
import styles from "../../../styles/components/PlaceCard.module.scss"




interface PlaceCardProps {
    data: Place;
    onAction?: (id:string) => void;
    disabled?: boolean;
    currentUser?: SafeUser | null;
}
const PlaceCard: React.FC<PlaceCardProps> =({
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
                   
                    <div className={styles.heartButton}>
                        <HeartButton
                        placeId={data.id}
                        currentUser={currentUser}/>
                    </div>
                    <div className={styles.name}>
                        <p>{data.name}</p>
                    </div>
                    <div className={styles.url}>
                        <a href={data.www || ''}>Website</a>
                    </div>
                </div>
            </div>
        </div>
      );
}
 
export default PlaceCard;