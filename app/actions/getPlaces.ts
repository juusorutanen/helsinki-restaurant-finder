import prisma from "@/app/libs/prismadb";

export default async function getPlaces() {
  try {
    const places = await prisma.place.findMany({
      orderBy: {
        name: 'asc', 
      },
      
    });

    return places;
  } catch (error: any) {
    throw new Error(error);
  }
}







