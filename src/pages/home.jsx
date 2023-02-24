import React from 'react'
import { logo } from './logo.png'

const Home = () => {
    return (
        <>
            <center>
                <img src="/logo.png" alt="jeteditor" width='200px' />
                <h1>Jet<span>Editor</span></h1>
            </center>
            <div className='homepage'>
                <form>
                    <input type="text" name='roomid' placeholder='ROOM ID' />
                    <input type="text" name='username' placeholder='USERNAME' />
                    <input type="submit" value='Submit' className='submit-btn' />
                    <span>Create Your Room ID <button><u>Click here </u></button></span>
                </form>
            </div>
        </>
    )
}

export default Home