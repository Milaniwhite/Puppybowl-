import { useParams } from 'react-router-dom';

function SinglePlayer() {
  const { id } = useParams();  

  return (
    <div>
      <h1>The SinglePlayer component</h1>
      <p>Player ID: {id}</p>
    </div>
  );
}