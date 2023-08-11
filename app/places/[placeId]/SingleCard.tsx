'use client';

import { Place } from "@prisma/client";
import { SafeUser } from "@/app/types";
import Container from "@/app/components/Container";
import Image from "next/image";
import HeartButton from "../../components/HeartButton";
import styles from "../../../styles/components/SingleCard.module.scss";
import { GrLocation} from 'react-icons/gr';
import { TbWorld } from 'react-icons/tb';




interface SingleCardProps {
    data: Place;
    currentUser?: SafeUser | null;
}
const SingleCard: React.FC<SingleCardProps> =({
    data,
    currentUser
}) => {
    return (
        <div className={styles.cardContainer}>
        
        <Container>
            <div className={styles.infoContainer}>
                <div className={styles.infoColumn}>
                        <h1>{data.name}</h1>
                        <div className={styles.location}>
                        <p className={styles.locationHeader}><GrLocation/>{data.street_address},{data.address_zip},{data.address_city}</p>
                        </div>
                        <div className={styles.descContainer}>
                            {data.desc}  
                        </div>
                        {data.email ? <p>Email: {data.email}</p> : null}
                        {data.phone ? <p>Phone: {data.phone}</p> : null}
                    </div>
                    <div className={styles.infoColumn}>
                        <a href={data.www || ''}>Website</a>
                        <div className={styles.favorites}>
                        Add to favorites
                        <HeartButton
                        placeId={data.id}
                        currentUser={currentUser}/>
                        </div>
                    </div>
            </div>
            <div className={styles.imageContainer}>
                    <Image
                        width={1000}
                        height={1000}
                        className={styles.nextimg}
                        alt="Restaurant"
                        src={data.picture_url || ''}
                        />
                </div>
        </Container>
        </div>
      );
}
 
export default SingleCard;