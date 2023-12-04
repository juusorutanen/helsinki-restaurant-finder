'use client';

import { Place } from "@prisma/client";
import { SafeUser } from "@/app/types";
import { useRouter } from "next/navigation";
import Image from "next/image";
import HeartButton from "../HeartButton";
import styles from "../../../styles/components/PlaceCard.module.scss"


interface PlaceCardProps {
    data: Place;
    currentUser?: SafeUser | null;
}
const PlaceCard: React.FC<PlaceCardProps> =({
    data,
    currentUser
}) => {
    const router = useRouter();

    return (
                <div className={styles.card}>
                    <div className={styles.cardImageContainer} onClick={() => router.push(`/places/${data.id}`)}>
                        <Image
                        width={1000}
                        height={1000}
                        className={styles.nextimg}
                        alt="Restaurant"
                        src={data.picture_url || ''}
                        loading="lazy"
                        />
                    </div>
                    <div className={styles.heartButton}>
                        <HeartButton
                        placeId={data.id}
                        currentUser={currentUser}/>
                    </div>
                    <div className={styles.infoContainer}>
                        <div className={styles.info}>
                            <p className={styles.name}>{data.name}</p>
                            <p className={styles.address}>{data.street_address}</p>
                        </div>
                        <div className={styles.url}>
                            <a href={data.www || ''} target="_blank">Website</a>
                        </div>
                    </div>
            </div>
      );
}
 
export default PlaceCard;