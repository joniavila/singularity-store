import React, { useEffect, useState } from 'react';
// import ItemsMock from '../../itemsMock.json'
import { useParams } from 'react-router';
import LinearProgress from '@material-ui/core/LinearProgress';
import ItemDetail from '../ItemDetail/ItemDetail';
import { getFirestore } from '../../firebase/index';

const ItemDetailContainer = () => {
    const [item,setItem] = useState({})
    const [loading, setLoading] = useState(true)
    const {id} = useParams()

    useEffect(()=>{
        const db = getFirestore();
        const itemCollection = db.collection('items');
        const item = itemCollection.doc(id);
        item.get().then(doc => {
            if (!doc.exists) {
            console.log('Item no encontrado');
            setLoading(false);
            return;
            }
            console.log('Item encontrado');
            setItem({ id: doc.id, ...doc.data() });
            setLoading(false);
            console.log(doc.data())
        })
        .catch(error => {
            console.log(error);
            setLoading(false);
        });
    },[id])
    return (
        <div>
        { loading ? 
            <LinearProgress color="secondary" />
            :
            <div style={{display: 'flex' }}>
                <ItemDetail item={item} /> 
            </div>
        }
        </div>
    );
};

export default ItemDetailContainer;