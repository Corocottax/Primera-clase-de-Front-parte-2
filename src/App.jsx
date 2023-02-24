import './App.css';
import ComponenteHijo from './components/ComponenteHijo';

function App() {

  //! LÓGICA
  const meme1 = "https://i.pinimg.com/736x/c5/e3/c9/c5e3c9b5260daa31f5a4ab03ff048ece.jpg";
  const meme2 = "https://www.meme-arsenal.com/memes/77ef50b6001a7b3bce9410af12cb16b2.jpg";
  const meme3 = "https://pbs.twimg.com/media/FSG0DTtXwAENpiI.jpg";
  const meme4 = "https://pics.esmemes.com/frontend-backend-57053831.png";


  return (

    //! HTML

    <div>
      <h1>SOY EL COMPONENTE PADRE Y MI HIJO ES COMPONENTEHIJO</h1>
      <ComponenteHijo meme={meme1}/> {/* ENVÍO EN SU OBJETO PROPS LA PROPIEDAD MEME CON EL VALOR DE LA VARIABLE MEME1, Y ASIN SUCESIVAMENTE */}
      <ComponenteHijo meme={meme2}/>
      <ComponenteHijo meme={meme3}/>
      <ComponenteHijo meme={meme4}/>
    </div>
  );
}

export default App;
