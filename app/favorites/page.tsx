import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";
import styles from '../../styles/layout/Grid.module.scss'
import Container from "../components/Container";
import Heading from "../components/Heading";

import getCurrentUser from "../actions/getCurrentUser";
import getFavoritePlaces from "../actions/getFavoritePlaces";
import FavoritesCard from "./FavoritesCard";


const FavoritesPage = async () => {

    const places = await getFavoritePlaces();
    const currentUser = await getCurrentUser();

    if (places.length == 0) {
        
    return (
        <ClientOnly>
            <EmptyState
            title="Nothing here"
            subtitle="Go and add some favorites!"
            />
        </ClientOnly>
    )
}

return (
    <ClientOnly>
        <Container>
        <div className={styles.header}>
            <h1>Your favorites</h1>
            <div className={styles.gridSecondary}>
            {places.map((place: any) => {
            return (
                <FavoritesCard
                currentUser={currentUser}
                key={place.id}
                data={place}
                />
            )
            })}
            </div>
        </div>
        </Container>
    </ClientOnly>
    
)
}

export default FavoritesPage;