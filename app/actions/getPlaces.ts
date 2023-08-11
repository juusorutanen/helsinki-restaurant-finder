import prisma from "@/app/libs/prismadb";

export interface IPlacesParams { 
  search?: string; 
  category?: string;
}

export default async function getPlaces(
  params: IPlacesParams
) {
  try {
    const {
      search,
      category
    } = params;

    let where: any = {};
  
    if (search) {
      where.OR = [
        {
          desc: {
            contains: search,
            mode: "insensitive",
          },
        },
        {
          street_address: {
            contains: search,
            mode: "insensitive",
          },
        },
        {
          name: {
            contains: search,
            mode: "insensitive",
          },
        },
      ];
    }

    if (category) {
      where.desc = {
          contains: category,
          mode: "insensitive"
      };
  }

    const places = await prisma.place.findMany({
      where: where,
      orderBy: {
        name: 'desc', 
      },
      take: 100, 
    });

    return places;
  } catch (error: any) {
    throw new Error(error);
  }
}








