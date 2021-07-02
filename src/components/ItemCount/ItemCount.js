import React, {useState } from 'react';
import './ItemCount.css'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Toast from 'react-bootstrap/Toast'

const ItemCount = ({stock,initial,onAdd}) => {
        const [contador , setContador] = useState(parseInt(initial))
        const [show, setShow] = useState(false);
        const [bandera,setBandera] = useState(false)
        const sumar = () =>{
            if( stock > contador){
                setContador(contador +1)
            }else{
                setBandera(true)
                setShow(true)
            }
        }
        const restar =() =>{
            if(contador > 0){
                setContador(contador - 1)
                if(contador <= stock){
                    setBandera(false)
                }
            }
        }
        return (
            <div>
                <FormControl value={"STOCK DISPONIBLE: "+stock} readOnly/> 
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <Button onClick={sumar} disabled={bandera}>
                            +
                        </Button>
                    </InputGroup.Prepend>
                    <FormControl aria-describedby="basic-addon1" value={contador} readOnly></FormControl>
                    <InputGroup.Append>
                        <Button onClick={restar} disabled={contador===0}>
                            -
                        </Button>
                    </InputGroup.Append>
                </InputGroup>
                <Button onClick={()=>{onAdd(contador)}} disabled={contador===0}>
                        AGREGAR
                </Button>
                <Toast show={show} onClose={() => setShow(false)} delay={3000} autohide>
                    <Toast.Header>ERROR</Toast.Header>
                    <Toast.Body> No puede agregar mas productos debido a que supera el Stock Disponible</Toast.Body>
                </Toast>
            </div>
        );
}

export default ItemCount;