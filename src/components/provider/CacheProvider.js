import React, { useState } from 'react';
import CartContext from '../Context/CartContext';

export default function CacheProvider({ defaultValue = [], children }) {
  const [cache, setCache] = useState(defaultValue);

  function getAll(){
      return cache
  }

  function getFromCache(id) {
    return cache.find(x => x.item.id === id);
  }

  function isInCache({ id }) {
    return id === undefined ? undefined : getFromCache(id) !== undefined;
  }

  function addToCache(obj,cant) {
    if (isInCache(obj)) {
      alert('El elemento que desea agregar ya se encuentra en el carrito: ',obj);
      console.log(getAll())
      return;
    }
    let producto = {
      item: obj,
      cantidad: cant
    }
    console.log('Elemento agregado!');
    setCache([...cache, producto])
    // localStorage.setItem('productos',cache)
  }

  function removeItem(obj){
    if (isInCache(obj)) {
        alert('El elemento que desea eliminar no se encuentra en el carrito: ',obj);
        return;
    }
    let productos = cache.filter( e => e !== obj.id)
    setCache([...productos])
    return 'Elemento eliminado'
  }

  function clearCache(){
      setCache(defaultValue)
      return 'Cache eliminada'
  }



  return (
    <CartContext.Provider
      value={{ cache, addToCache, isInCache, getAll,removeItem,clearCache, cacheSize: cache.length }}
    >
      {children}
    </CartContext.Provider>
  );
}
