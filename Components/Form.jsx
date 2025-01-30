import { Input } from 'postcss';
import React from 'react'
import { addPlayer } from './API/Index';
const Form = () => {
    async function handleSubmit(e) {
        const [name, setName] = useState("");
        const [breed, setBreed] = useState("");
        const [imageUrl, setImageUrl] = useState("");
        e.preventDefault();
        const result = await addPlayer(name,breed,imageUrl);
        if (result && result.success) {
            setName("");
            setBreed("");
            setImageUrl("");
            setFetchToggle((prev) => ! prev);
        } else {
            console.error("Failed to add player!");
        }
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
            Name:
            <input type="text" value={name}  onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
            Breed:
            <input type="text" value={breed} onChange={(e) => setBreed(e.target.value)}/>
        </label>
        <label>
            Image:
            <input type="text"value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
        </label>
        <button type="submit">
        submit
        </button>
      </form>
    </div>
  )
}

export default Form
