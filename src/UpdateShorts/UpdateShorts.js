import React, { useState } from "react";
import axios from 'axios';
import './UpdateShorts.css';

const UpdateShorts = () => {
    const [id, setId] = useState('');
    const [description, setDescription] = useState('');
    const [size, setSize] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();

        const updatedShorts = {
            id: id,
            description: description,
            size: size
        };

        try {
            await axios.put(`http://localhost:5000/shorts/${id}`, updatedShorts);
            console.log('Shorts updated successfully!');
        } catch (err) {
            console.error('Error updating shorts:', err);
        }

        setId('');
        setDescription('');
        setSize('');
    };

    return (
        <>
            <br></br>
            <div className='page'>
                <h1 className='title'>Update Shorts</h1>
                <br></br>
                <h4>Enter the ID for the Shorts you want to edit:</h4>
                <form onSubmit={onSubmit}>
                    <div className='form-group'>
                        <label>ID</label>
                        <input type='text' required className='form-control' value={id} onChange={(e) => setId(e.target.value)} />
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
                        <button type='submit' className='createButton'>Update Shorts</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default UpdateShorts;
