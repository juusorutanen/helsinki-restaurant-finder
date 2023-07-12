
import ClientOnly from './components/ClientOnly';
import getCurrentUser from './actions/getCurrentUser';
import Container from './components/Container';
import styles from '../styles/layout/Grid.module.scss'
import EmptyState from './components/EmptyState';
import getPlaces from './actions/getPlaces';
import PlaceCard from './components/places/PlaceCard';

export default async function Home() {
  const places = await getPlaces();
  const currentUser = await getCurrentUser();
  
  if (places.length === 0) {
    return (
      <ClientOnly>
        <EmptyState showReset/>
      </ClientOnly>
    )
  }

  
  return (
    <ClientOnly>
      <Container>
        <div className={styles.gridMain}>
          {places.map((place: any) => {
            return (
              <PlaceCard
              currentUser={currentUser}
              key={place.id}
              data={place}
              />
            )
          })}
        </div>
      </Container>
    </ClientOnly>
  )
}
