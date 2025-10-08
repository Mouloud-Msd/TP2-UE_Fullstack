// import axios from 'axios';
//  import { useEffect, useState } from 'react';
import ArtistForm from "../components/ArtistForm";

export default function Artists() {
    //  const [artists , setArtists] = useState([]);
    // useEffect(
    //     () => {
    //         axios.get("http://localhost:8080/artists")
    //         .then( (response)=>{
    //             const arts = response.data.content.map( (item) => item.label );
    //             setArtists(arts); ;
            
    //              })
    //         .catch( (error) => console.error(error) );
    //     } , []
    // )
  return (
    <div>
    <h1>add an artists</h1>
    <ArtistForm/>
    </div>
    )
}