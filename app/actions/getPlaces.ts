import prisma from "@/app/libs/prismadb";

export interface IPlacesParams { 
  desc?: string;
}

export default async function getPlaces(
  params: IPlacesParams
) {
  try {
    const {
      desc,
    } = params;


    let query: any = {};

    if (desc) {
      query.desc = {
        contains: desc,
        mode: "insensitive",
      };
    }
    const places = await prisma.place.findMany({
      where:query,
      orderBy: {
        name: 'asc', 
      },
      take: 100, 
      
    });

    return places;
  } catch (error: any) {
    throw new Error(error);
  }
}







