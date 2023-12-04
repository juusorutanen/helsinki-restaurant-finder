import { NextResponse } from "next/server";
import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/app/libs/prismadb";

interface IParams {
  placeId?: string;
}

// Handle HTTP POST requests
export async function POST(request: Request, { params }: { params: IParams }) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  // Extract the 'placeId' from the request parameters
  const { placeId } = params;
  // Ensure that 'placeId' is a valid string; otherwise, throw an error
  if (!placeId || typeof placeId !== "string") {
    throw new Error("Invalid ID");
  }

  let favoriteIds = [...(currentUser.favoriteIds || [])];

  favoriteIds.push(placeId);

  // Update the user's data in the database with the new 'favoriteIds'
  const user = await prisma.user.update({
    where: {
      id: currentUser.id,
    },
    data: {
      favoriteIds,
    },
  });

  return NextResponse.json(user);
}

// Handle HTTP DELETE requests
export async function DELETE(
  request: Request,
  { params }: { params: IParams }
) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const { placeId } = params;

  if (!placeId || typeof placeId !== "string") {
    throw new Error("Invalid ID");
  }

  let favoriteIds = [...(currentUser.favoriteIds || [])];

  // Remove the 'placeId' from the 'favoriteIds' array
  favoriteIds = favoriteIds.filter((id) => id !== placeId);

  const user = await prisma.user.update({
    where: {
      id: currentUser.id,
    },
    data: {
      favoriteIds,
    },
  });

  return NextResponse.json(user);
}
