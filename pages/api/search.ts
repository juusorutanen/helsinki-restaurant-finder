
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/app/libs/prismadb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const { q: query } = req.query;

      if (typeof query !== "string") {
        throw new Error("Invalid request");
      }

      const places = await prisma.place.findMany({
        where: {
          OR: [
            {
              desc: {
                contains: query,
                mode: "insensitive",
              },
            },
            {
              
                name: {
                  contains: query,
                  mode: "insensitive",
                },
              },
          ],
        },
      });

    
      await prisma.searchQuery.create({
        data: {
          query,
        },
      });

     
      res.status(200).json({ places });
    } catch (error: any) {
      console.log(error);
      res.status(500).end();
    }
  }
}