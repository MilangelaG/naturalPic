import React, { useContext } from 'react'
import { MyContext } from '../context/MyContext'
import Heart from '../components/Heart.jsx'

const FavoritosPage = () => {

  const  {fotos, setFotos} = useContext(MyContext);

  const handleClick = (id) => {
    const fotoIndex = fotos.findIndex((f) => f.id === id);
    fotos[fotoIndex].favorito = !fotos[fotoIndex].favorito;
    setFotos([...fotos]);
  };

  const filterFavorites = (coleccion) => {
    return coleccion.filter(item => item.favorito);
  };

  return (
    <div className='galeria grid-columns-5 p-3'>
       {filterFavorites(fotos).map(foto => (
         <div
         onClick={() => handleClick(foto.id)}
         className='foto' key={foto.id}
         style={{ backgroundImage: `url(${foto.src})`}} >
         <Heart filled={foto.favorito} />
        </div>
       ))}
    </div>
  )
}

export default FavoritosPage