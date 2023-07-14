"use client";

import { useRouter, useSearchParams } from "next/navigation";
import Spinner from "./Spinner";
import useSWR from "swr";
import PlaceCard from "../components/places/PlaceCard"
import styles from "../../styles/layout/Grid.module.scss"



const fetchPlaces = async (url: string) => {
  const response = await fetch(url);
 

  if (!response.ok) {
    throw new Error("Failed to fetch restaurants");
  }

  return response.json();
};

const SearchPage = () => {

  const search = useSearchParams();
  const searchQuery = search ? search.get("q") : null;
  const router = useRouter();

  const encodedSearchQuery = encodeURI(searchQuery || "");

  const { data, isLoading } = useSWR(
    `/api/search?q=${encodedSearchQuery}`,
    fetchPlaces,
    { revalidateOnFocus: false }
  );

  if (!encodedSearchQuery) {
    router.push("/");
  }

  if (isLoading) {
    return <Spinner />;
  }

  if (!data) {
    return null;
  }


  return (
    <>
      <span className="text-xl">
      Showing results for:{" "}
        <span className="font-semibold">{searchQuery}</span>
      </span>
      <div className={styles.gridMain}>
      {data.places.map((place:any) => (
        <PlaceCard key={place.id} data={place} />
      ))}
      </div>
    </>
  );
};

export default SearchPage;