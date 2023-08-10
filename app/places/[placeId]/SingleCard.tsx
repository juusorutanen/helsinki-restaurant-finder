'use client';

import { Place } from "@prisma/client";
import { SafeUser } from "@/app/types";
import Container from "@/app/components/Container";
import Image from "next/image";
import HeartButton from "../../components/HeartButton";
import styles from "../../../styles/components/SingleCard.module.scss"
import { GrLocation} from 'react-icons/gr'




interface SingleCardProps {
    data: Place;
    currentUser?: SafeUser | null;
}
const SingleCard: React.FC<SingleCardProps> =({
    data,
    currentUser
}) => {
    return (
        <Container>
            <div className={styles.cardContainer}>
                <div className={styles.header}>
                        <h1>{data.name}</h1>
                        <div className={styles.favorites}>
                        Add to favorites
                        <HeartButton
                        placeId={data.id}
                        currentUser={currentUser}/>
                        </div>
                </div>
                <div className={styles.location}>
                   <p className={styles.locationHeader}><GrLocation/>{data.street_address},{data.address_zip},{data.address_city}</p>
                </div>

                    <div className={styles.descContainer}>
                        {data.desc}
                    </div>
                    <div className={styles.url}>
                        <a href={data.www || ''}>Website</a>
                    </div>
            </div>
        </Container>
            
            
      );
}
 
export default SingleCard;