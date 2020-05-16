import React, { useState, useEffect } from 'react'
import MatchListItem from '../matches/MatchListItem'

const Live = () => {
    const [liveMatches, setLiveMatches] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const getLiveMatches = async () => {
            const res = await fetch(`https://api.football-data.org/v2/matches?status=LIVE`,
            // const res = await fetch(`https://api.football-data.org/v2/matches?dateFrom=2020-05-16&dateTo=2020-05-17&status=SCHEDULED`,
            {headers: {'X-Auth-Token': '3e7fcad6f9304719999bff2e37c6b442'}});
            const data = await res.json();
            console.log(data.matches);
            setLiveMatches(data.matches);
            setLoading(false);
        };

        getLiveMatches();
    }, []);

    return (
        <div style={{ marginTop: '10px' }}>
            { liveMatches.length === 0 ? <h2 className='text-center'>No Live Matches</h2> : <h2 className='text-center'>Live Matches</h2>}
            <div className='card-columns'>
                { liveMatches.length > 0 && liveMatches.map(match => <MatchListItem key={match.id} match={match} /> )}
            </div>
        </div>
    )
}

export default Live
