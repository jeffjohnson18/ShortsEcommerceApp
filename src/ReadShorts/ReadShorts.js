import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './ReadShorts.css';
const baseURL = 'https://localhost:5000';

const ShortService = {
    getShorts: async () => {
      return axios.get('http://localhost:5000/shorts'); // Replace with your API endpoint
    },
};

const ReadShorts = () => {
    const [shorts, setShorts] = useState([]);
    useEffect(() => {
        loadShorts();
    }, []);

const loadShorts = async () => {
    try {
        const response = await ShortService.getShorts();
        setShorts(response.data);
    }
    catch (err) {
        console.log(err);
    }
};

return (
    <div className="container mt-5">
      <br>
      </br>
      <h2>Shorts List</h2>
      <table className="table">
        <thead>
          <tr className='row'>
            <th>ID</th>
            <th>Title</th>
            <th>Size</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {shorts.map((short) => (
            <tr key={short.shortid}>
              <td>{short.shortid}</td>
              <td>{short.title}</td>
              <td>{short.item}</td>
              <td>{short.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    );
};

export default ReadShorts;