import React, { useState } from 'react';
import CartContext from '../Context/CartContext';

export default function CacheProvider({ children }) {
  const [cache, setCache] = useState([]);

  function getAll(){
      return cache
  }

  function getFromCache(id) {
    return cache.find(x => x.id === id);
  }

  function isInCache({ id }) {
    return id === undefined ? undefined : getFromCache(id) !== undefined;
  }

  function guardarEnLocal(){
    localStorage.setItem('productosAgregados',JSON.stringify(getAll()))
  }

  function addToCache(obj,cant) {
    if (isInCache(obj)) {
      alert('El elemento que desea agregar ya se encuentra en el carrito: ',obj);
      console.log(getAll())
      return;
    }
    let arrayProductos = [...cache, {
      id: obj.id,
      title: obj.title,
      price: obj.price,
      category:obj.category,
      cantidad: cant
    }]
    setCache(arrayProductos,guardarEnLocal())
  }

  function removeItem(obj){
    let productos = cache.filter( e => e.id !== obj.id)
    setCache([...productos])
    return 'Elemento eliminado'
  }

  function clearCache(){
      setCache([])
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
