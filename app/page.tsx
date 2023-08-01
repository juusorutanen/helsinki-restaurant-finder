
import ClientOnly from './components/ClientOnly';
import getCurrentUser from './actions/getCurrentUser';
import Container from './components/Container';
import styles from '../styles/layout/Grid.module.scss'
import EmptyState from './components/EmptyState';
import getPlaces from './actions/getPlaces';
import PlaceCard from './components/places/PlaceCard';
import PaginationBar from './components/PaginationBar';
import prisma from '@/app/libs/prismadb';

interface HomeProps {
  searchParams: { page: string}
}


export default async function Home({ searchParams :  { page = "1" } } : HomeProps) {
  const currentPage = parseInt(page);

  const pageSize = 12
  const totalPlaceCount = await prisma.place.count();
  const totalPages = Math.ceil(totalPlaceCount / pageSize);

  const places = await prisma.place.findMany({
    orderBy: { id: "desc" },
    skip: (currentPage - 1) * pageSize,
    take: pageSize,
  });
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
        {totalPages > 1 && (
        <PaginationBar currentPage={currentPage} totalPages={totalPages}/>
        )}
      </Container>
    </ClientOnly>
  )
}
