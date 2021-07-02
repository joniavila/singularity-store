import React, { useState } from 'react';
import CartContext from '../Context/CartContext';

export default function CacheProvider({ defaultValue = [], children }) {
  const [cache, setCache] = useState(defaultValue);

  function getAll(){
      return cache
  }

  function getFromCache(id) {
    return cache.find(x => x.id === id);
  }

  function isInCache({ id }) {
    return id === undefined ? undefined : getFromCache(id) !== undefined;
  }

  function addToCache(obj) {
    if (isInCache(obj)) {
      alert('El elemento que desea agregar ya se encuentra en el carrito: ',obj);
      return;
    }
    setCache([...cache, obj])
    console.log(cache)
    console.log('Elemento agregado!');
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
