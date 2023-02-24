import React, { useState } from 'react'
import { BsGithub } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Alert from './alert'

const Home = () => {
    const [roomid, setRoomid] = useState(null);
    const [userName, setUserNAme] = useState(null);
    const [showalert, setShowAlert] = useState({
        show: false,
        type: "",
        message: ""
    })
    const generateRandom = (e) => {
        e.preventDefault();
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        for (var i = 0; i < 8; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length))
        }
        setRoomid(result)
        console.log(roomid)
        setShowAlert({
            show: true,
            type: "success",
            message: "Token generated Succesfully"
        })
    }
    const hideAlert = () => {
        setShowAlert({
            show: false,
            type: "",
            message: ""
        })
    }
    const filterAccount = (e) => {
        if (!roomid || !userName) {
            setShowAlert({
                show: true,
                type: "danger",
                message: "Empty Credential !"
            })
            e.preventDefault();
        }

    }
    return (
        <>
            {showalert.show &&
                <Alert {...showalert} hideAlert={hideAlert} />
            }
            <center>
                <img src="/logo.png" alt="jeteditor" width='200px' />
                <h1>Jet<span>Editor</span></h1>
            </center>
            <div className='homepage'>
                <form>
                    <input type="text" name='roomid' placeholder='ROOM ID' value={roomid} onChange={(e) => setRoomid(e.target.value)} />
                    <input type="text" name='username' placeholder='USERNAME' value={userName} onChange={(e) => setUserNAme(e.target.value)}/>
                    <input type="submit" value='Join Now' className='submit-btn' onClick={(e) => filterAccount(e)} />
                    <span>Create Your Room ID: <button onClick={(e) => generateRandom(e)}><u>Click here </u></button></span>
                </form>
            </div>
            <footer>
                <center>
                    Developed by Rahul Khanal
                    <br />
                    <br />
                    <Link to="https://github.com/rahulkhanal">
                        <BsGithub color='white' size={30} />
                    </Link>
                </center>
            </footer>
        </>
    )
}

export default Home