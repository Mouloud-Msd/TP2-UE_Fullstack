 import {useState} from "react"
import artistsApi from "../../../http/artistsApi";
 function  ArtistForm(){
const [Name , setname] = useState("");
const [LastName , setLname] = useState("");

function handleChangeLN(e : React.ChangeEvent<HTMLInputElement>){
    setLname(e.target.value);
    
}
function handleChangeN(e : React.ChangeEvent<HTMLInputElement>){
    setname(e.target.value);
}
async function handleSubmit(e :React.FormEvent){
    e.preventDefault();
    try{
        const ArtistData = {
            label : `${Name} ${LastName} `
        }
        const response = await artistsApi.create(ArtistData);
        console.log(response.data);
        setname("")
        setLname("")
    }catch (error){
        console.error("eroor",error);
        
    }

}

    return (
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 mx-auto">
  
    <form onSubmit={handleSubmit}>
        
  <label className="label">First Name</label>
  <input type="text" value={Name} className="input" placeholder="Name" onChange={handleChangeN} required />

  <label className="label">Last Name</label>
  <input type="text" value={LastName} className="input" placeholder="Last Name" onChange={handleChangeLN} required />

  <button className="btn btn-neutral mt-4">Submit</button>
  </form>
</fieldset>
    )
}
export default ArtistForm ;