// import axios from 'axios';
//  import { useEffect, useState } from 'react';
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
    <h1>all artists</h1>
    <ul>
        {/* {artists.map( (artist, index) => (
            <li key={index}>{artist}</li>
        ))} */}
    </ul>
    </div>
    )
}