import React from 'react'
import Live from '../live/Live'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <div style={{ backgroundColor: 'lightgrey', padding: '3rem' }}>
                <h3 className="text-center">The Top Football Leagues Past, Present, and Future Matches</h3>
                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-2">
                        <Link to="/scores" className="btn btn-primary">Scores</Link>
                    </div>
                    <div className="col-2">
                        <Link to="/upcoming" className="btn btn-primary">Upcoming</Link>
                    </div>
                    <div className="col-4"></div>
                </div>
            </div>
            <div className='container'>
                <Live />
            </div>
        </div>
    )
}

export default Home
