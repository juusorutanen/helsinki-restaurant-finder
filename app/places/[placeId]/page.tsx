import getPlaceById from "@/app/actions/getPlacesById";
import ClientOnly from "@/app/components/ClientOnly";
import styles from "../../../styles/pages/PlacePage.module.scss"
import EmptyState from "@/app/components/EmptyState";
import getCurrentUser from "@/app/actions/getCurrentUser";
import SingleCard from "./SingleCard";

interface IPparams {
    placeId?: string;
}

const PlacePage = async({ params}: { params: IPparams}) => {

    const place = await getPlaceById(params);
    const currentUser = await getCurrentUser();

    if (!place) {
        return (
            <ClientOnly>
                <EmptyState/>
            </ClientOnly>
        )
    }
    return (  
        <div className={styles.pageContainer}>
        <ClientOnly>
            <SingleCard
            currentUser={currentUser}
            key={place.id}
            data={place}
            />
        </ClientOnly>
        </div>
    );
}
 
export default PlacePage;