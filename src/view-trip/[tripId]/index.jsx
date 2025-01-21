import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'sonner';
import {doc,getDoc} from 'firebase/firestore'
import { db } from '@/service/firebaseConfig';
import InfoSection from '../components/InfoSection';
import Hotels from '../components/Hotels';

function Viewtrip() {

    const { tripId } = useParams();
    const [trip, setTrip] = useState([]);
    useEffect(() => {
        tripId&&GetTripData()
    },[tripId])

    /**
     * Used to get the trip Information from firebase
     */

    const GetTripData=async()=>{
        const docRef = doc(db, "AITrips", tripId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            setTrip(docSnap.data());
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
            toast('No trip Found!')
        }
    }
  return (
    <div className='p-10 md:px-20 lg:px-56'>
        {/** Information Section*/}
            <InfoSection trip={trip}/>
        {/** Recommended  Hotels*/}
            <Hotels trip={trip}/>
        {/** Daily Plan*/}
        {/** Footer*/}
    </div>
  )
}

export default Viewtrip