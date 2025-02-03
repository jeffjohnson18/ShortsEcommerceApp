import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './CreateShorts.css';

const CreateShorts = () => {
    const [name, setName] = useState('');
    const [item, setItem] = useState('');
    const [description, setDescription] = useState('');
    const [size, setSize] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();
    
        const newShorts = {
            name: name,
            item: item,
            description: description,
            size: size
        };
    
        try {
            await axios.post('http://localhost:5000/shorts', newShorts);
            setName('');
            setItem('');
            setDescription('');
            setSize('');
        } catch (err) {
            console.error(err);
        }
    };
    

    return (
        <>
        <br>
        </br>
        <div className='page'>
                <h1 className='title'>Create Shorts</h1>
                <form onSubmit={onSubmit}>
                    <div className='form-group'>
                        <label>Name</label>
                        <input type='text' required className='form-control' value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className='form-group'>
                        <label>Item</label>
                        <input type='text' required className='form-control' value={item} onChange={(e) => setItem(e.target.value)} />
                    </div>
                    <div className='form-group'>
                        <label>Description</label>
                        <input type='text' required className='form-control' value={description} onChange={(e) => setDescription(e.target.value)} />
                    </div>
                    <div className='form-group'>
                        <label>Size</label>
                        <input type='text' required className='form-control' value={size} onChange={(e) => setSize(e.target.value)} />
                    </div>
                    <div className='form-group'>
                        <button type='submit' className='createButton'>Create Shorts</button>
                    </div>
                </form>
            </div></>
    );
};

export default CreateShorts;