
import ClientOnly from './components/ClientOnly';
import Container from './components/Container';
import styles from '../styles/layout/Grid.module.scss'
import EmptyState from './components/EmptyState';
import PlaceCard from './components/places/PlaceCard';
import PaginationBar from './components/PaginationBar';
import prisma from '@/app/libs/prismadb';

import getPlaces, { 
  IPlacesParams
} from "@/app/actions/getPlaces";
import getCurrentUser from "@/app/actions/getCurrentUser";

interface HomeProps {
  searchParams: IPlacesParams
};

const Home = async ({ searchParams }: HomeProps) => {
  const places = await getPlaces(searchParams);
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

export default Home;