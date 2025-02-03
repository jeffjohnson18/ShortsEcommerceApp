import React from "react";
import axios from "axios";
import './DeleteShorts.css';

const DeleteShorts = () => {
    const [id, setId] = React.useState('');

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.delete(`http://localhost:5000/shorts/${id}`);
            setId('');
        } catch (err) {
            console.error(err);
        }

        setId('');
    };

    return (
        

        <div className='page'>
            <br>
            </br>
            <h1 className='title'>Delete Shorts</h1>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <label>Enter the ID for the shorts you want to delete</label>
                    <input type='text' required className='form-control' value={id} onChange={(e) => setId(e.target.value)} />
                </div>
                <div className='form-group'>
                    <button type='submit' className='deleteButton'>Delete Shorts</button>
                </div>
            </form>
        </div>
    );
};

export default DeleteShorts;