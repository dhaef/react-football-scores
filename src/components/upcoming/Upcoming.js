import React, { useState, useEffect } from 'react'
import MatchListItem from '../matches/MatchListItem'
import Spinner from '../layout/Spinner'

const Upcoming = () => {
    const [dateRange, setDateRange] = useState({ start: '2020-05-17', end: '2020-05-18' });
    const [matches, setMatches] = useState([]);
    const [loading, setLoading] = useState(false);
    const [limitMatches, setLimitMatches] = useState(1);

    const handleDateChange = e => {
        setDateRange({ ...dateRange, [e.target.name]: e.target.value });
    };

    const handleSubmitDateRange = e => {
        e.preventDefault();
        getData();
    };

    const getData = async () => {
        setLoading(true)
        const res = await fetch(`https://api.football-data.org/v2/matches?dateFrom=${dateRange.start}&dateTo=${dateRange.end}`, 
        {headers: {'X-Auth-Token': '3e7fcad6f9304719999bff2e37c6b442'}});
        const data = await res.json();
        console.log(data);
        setMatches(data.matches.filter(match => match.status !== "POSTPONED"));
        setLoading(false);
    };

    useEffect(() => {
        getData();
        // eslint-disable-next-line
    }, []);

    const showLoadMoreBtn = () => {
        if (!loading && (limitMatches * 6) < matches.length ) {
            return <button className="btn btn-secondary" 
                        onClick={() => setLimitMatches(limitMatches + 1)}
                        style={{ width: '100%' }}>
                Load More...</button>
        }
    }

    return (
        <div className="container"
            style={{ marginTop: '1rem' }}>
            <form onSubmit={handleSubmitDateRange}>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Start Date</span>
                    </div>
                    <input className="form-control"
                        name='start'
                        onChange={handleDateChange}
                        value={dateRange.start}
                        type='date'>

                    </input>
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">End Date</span>
                    </div>
                    <input className="form-control"
                        name='end'
                        onChange={handleDateChange}
                        value={dateRange.end}
                        type='date'>

                    </input>
                </div>
                <button className="btn btn-secondary"
                    type="submit"
                    style={{ width: '100%' }}>
                    Find Matches
                </button>
            </form>
            { matches.length === 0 ? 
                <h2 className='text-center'  style={{ marginTop: '10px' }}>No Matches During This Time</h2> : 
                <h2 className='text-center'  style={{ marginTop: '10px' }}>Matches</h2>}
            <div className='card-columns'>
                { loading ? 
                    <Spinner /> : 
                    matches.map((match, index) => {
                        if (index < (6 * limitMatches)) {
                            return <MatchListItem key={match.id} match={match} />
                        }
                        return;
                    } )}
            </div>
            { showLoadMoreBtn() }
        </div>
    )
}

export default Upcoming
