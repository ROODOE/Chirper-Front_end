import React, { useState } from 'react';
import './components/Timeline.jsx';

const App = () => {
    const [username, setUsername] = useState();
    const [chirps, setChirps] = useState();
    const [chirpArr, setChirpArr] = useState([{ username: 'Bleep', message: 'Bleep' }, { username: 'Bloop', message: 'Bloop' }, {username: 'Blerp', message: 'Blerp'}]);

    const createChirp = () => {
        let obj = {
            username: username,
            message: chirps
        }
        setChirpArr([...chirpArr, obj])
    }

    return (
        <>
            <div id="main-container">

                <div id="container">
                    <div className="chirp-body display-flex">
                        <input onChange={(e) => setUsername(e.target.value)} className="chirper" type="email" placeholder="@" /><br></br>
                        <textarea onChange={(e) => setChirps(e.target.value)} className="chirper" type="textArea" placeholder="Tell us something" />
                        <br></br><a href="#" className="btn btn-primary" onClick={(e) => createChirp(e)}>Chirp</a>
                    </div>
                </div>

                <div className="chirps ">
                    {chirpArr.map((chirp) => {
                        return (
                            <div className="new-chirps display-flex">
                                <h3>@{chirp.username}</h3>
                                <br></br><p>{chirp.message}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    );
}

    /* {
        <div className="new-chirps display-flex">
                        <h3>@{username}</h3>
                        <br></br><p>Bleep bleep bleep bleep bleep bleep bleep bleep bleep bleep bleep bleep bleep</p>
                    </div>
                    <div className="new-chirps display-flex">
                        <h3>@Bloop</h3>
                        <br></br><p>Bloop bloop bloop bloop bloop bloop bloop bloop bloop bloop bloop bloop bloop</p>
                    </div>
                    <div className="new-chirps display-flex">
                        <h3>@Blerp</h3>
                        <br></br><p>Blerp blerp blerp blerp blerp blerp blerp blerp blerp blerp blerp blerp blerp</p>
                        </div> 
                    }*/

export default App;