export const dynamic = 'force-dynamic'
import ClientOnly from './components/ClientOnly';
import Container from './components/Container';
import styles from '../styles/layout/Grid.module.scss';
import EmptyState from './components/EmptyState';
import PlaceCard from './components/places/PlaceCard';
import PaginationBar from './components/PaginationBar';

import getPlaces, { IPlacesParams } from "@/app/actions/getPlaces";
import getCurrentUser from "@/app/actions/getCurrentUser";

interface HomeProps {
  searchParams: { page?: string } & IPlacesParams;
};

const Home = async ({ searchParams }: HomeProps) => {
  const currentPage = parseInt(searchParams.page || "1");
  const pageSize = 28;

  const places = await getPlaces(searchParams);
  const currentUser = await getCurrentUser();

  const totalItemCount = places.length;
  const totalPages = Math.ceil(totalItemCount / pageSize);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const paginatedPlaces = places.slice(startIndex, endIndex);

  if (places.length === 0) {
    return (
      <ClientOnly>
        <EmptyState showReset />
      </ClientOnly>
    )
  }  

  return (
    <ClientOnly>
      <Container>
        <div className={styles.gridMain}>
          {paginatedPlaces.map((place: any) => {
            return (
              <PlaceCard
                currentUser={currentUser}
                key={place.id}
                data={place}
              />
            )
          })}
        </div>
        {totalPages > 1 && (
          <PaginationBar currentPage={currentPage} totalPages={totalPages} />
        )}
      </Container>
    </ClientOnly>
  )
}

export default Home;
