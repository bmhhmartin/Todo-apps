import React, {useState} from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { FaTrashAlt, FaPlus } from "react-icons/fa";

const Todo = () => {

    const [inputData, setinputData] = useState('');
    const [items, setItems] = useState([]);


    const addItems =()=>{
        if(!inputData){
            alert("Enter any data")
        }else{
            setItems([...items, inputData]);
            setinputData('');
        }
    }

    const deleteAction =(id)=>{
        const updateItem = items.filter((elem, ind)=>{
            return ind !== id;
        })

        setItems(updateItem);
    }

    const removeAll=()=>{
        setItems([]);
    }

    return (
        <>
            <Container>
                <div className="todoContainer">
                    <h2 className='text-center mb-5'>Create List</h2>
                    <form>
                        <Form.Group className="formGroup">
                            <Form.Control type="text" 
                                value={inputData}
                                onChange={(e)=>{setinputData(e.target.value)}}
                            />
                            <Button variant='info' className='addBtn text-white' onClick={addItems}><FaPlus/></Button>
                        </Form.Group>
                        {
                            items.map((elements, index)=>{
                                return (
                                    <div className="todo" key={index}>
                                        <div className="todoText">{elements}</div>
                                        <div className="todoAction">
                                            <Button style={{marginRight: "5px"}} variant='danger' onClick={()=>{deleteAction(index)}}><FaTrashAlt/></Button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </form>
                    <div className='d-flex justify-content-center'>
                        <Button className='btn btn-danger' onClick={removeAll}>Remove All</Button>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Todo;