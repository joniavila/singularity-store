import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList'
// import ItemsMock from '../../itemsMock.json'
import { useParams } from 'react-router-dom';
import LinearProgress from '@material-ui/core/LinearProgress';
import {getFirestore} from '../../firebase/index'

function ItemListContainer() {
        const {id} = useParams()
        const [data , setItems] = useState([])
        const [loading, setLoading] = useState(true)
        useEffect(()=>{
            const db = getFirestore();
            if(id === undefined){
            const itemCollection = db.collection('items');
                itemCollection.get().then(querySnapshot => {
                    if (querySnapshot.size === 0) {
                        console.log('No results');
                        setLoading(false);
                    }
                        setItems(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
                        setLoading(false);
                    });
                }else{
                    const itemCollection = db.collection('items');
                    const item = itemCollection.where('idCategory', '==', parseInt(id))
                    item.get().then(querySnapshot => {
                        if (querySnapshot.size === 0) {
                        console.log('Items no encontrados');
                        setLoading(false);
                        return;
                        }
                        console.log('Item encontrado');
                        setItems(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
                        setLoading(false);
                    })
                    .catch(error => {
                        console.log(error);
                        setLoading(false);
                    });
            }
        },[id])
        return (
            <div>
            { loading ? 
            <LinearProgress color="secondary" />
            : null }
            <ItemList dataItems={data}/>
            </div>
        );
    }


export default ItemListContainer;