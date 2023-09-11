import React, { useState } from 'react'
import './App.css'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [roomID, setRoomID] = useState();
    const navigate = useNavigate()
    const handleJoin = () => {
        navigate(`/room/${roomID}`)
    }
  return (
    <div className='App conatiner'>
        <div className="box">
        <h1>Video Call</h1>
        <input type="text" placeholder='Enter Room ID' className='inputBox' value={roomID} onChange={(e) => setRoomID(e.target.value)}/>
        <button className='btn' onClick={handleJoin}>Join</button>
        </div>
    </div>
  )
}

export default Home
