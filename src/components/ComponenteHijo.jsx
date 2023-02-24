import React from 'react'

const ComponenteHijo = ({meme}) => {

    //! DESESTRUCTURIZA LA VARIABLE MEME DEL OBJETO PROPS PARA PODER UTILIZARLA

    //! LÓGICA

  return (

    //! HTML

    <div>
      <h1>SOY EL COMPONENTE HIJO</h1>
      <img src={meme} alt="meme que probablemente no sea gracioso"/>
    </div>

  );
}

export default ComponenteHijo