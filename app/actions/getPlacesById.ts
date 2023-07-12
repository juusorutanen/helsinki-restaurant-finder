import prisma from "@/app/libs/prismadb";

interface IParams {
    placeId?: string;
}

export default async function getPlaceById(
    params: IParams
) {
    try {
        const { placeId } = params;

        const place = await prisma.place.findUnique({
            where: {
                id: placeId
            },
            include: {
                user:true
            }
        });

        if (!place) {
            return null;
        }

        return {
            ...place,
            user: {
                ...place.user,
                createdAt: place.user?.createdAt.toISOString(),
                updatedAt: place.user?.updatedAt.toISOString(),
                emailVerified:
                    place.user?.emailVerified?.toISOString() || null,
            }
        };
    } catch (error: any) {
        throw new Error(error);
    }
}