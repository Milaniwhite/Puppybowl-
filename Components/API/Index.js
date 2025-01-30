const COHORT="2410-FTB-ET-WEB-PT"
const API =`https://fsa-puppy-bowl.herokuapp.com/api/${COHORT}/players`


export async function GetAllPlayers(){
try {
const response = await fetch (API);
const result = await response.json();
return result;
} catch (error){
    console.error(error);
}
}

export async function SinglePlayers(id){
    try {
const response = await fetch (`${API}/${id}`);
const result = await response.json();
return result;

    }catch (error){
        console.error(error);
    }
}
export async function addPlayer(name,breed,imageUrl) {
    try {
        const response = await fetch (API, {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({name,breed,imageUrl})
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }
}