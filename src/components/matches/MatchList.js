import React, { useState, useEffect } from 'react'
import MatchListItem from './MatchListItem';
import MatchOptions from './MatchOptions';
import Spinner from '../layout/Spinner';

const MatchList = () => {
    const [matches, setMatches] = useState([]);
    const [loading, setLoading] = useState(false);
    const [dataToCall, setDataToCall] = useState({ competition: 2021, season: 2019, matchday: 1 });

    const handleChange = e => {
        setDataToCall({ ...dataToCall, [e.target.name]: parseInt(e.target.value) });
    }

    useEffect(() => {
        const getData = async () => {
            setLoading(true)
            const res = await fetch(`https://api.football-data.org/v2/competitions/${dataToCall.competition}/matches?season=${dataToCall.season}&matchday=${dataToCall.matchday}`, 
            // const res = await fetch(`https://api.football-data.org/v2/competitions/2000`, 
            {headers: {'X-Auth-Token': '3e7fcad6f9304719999bff2e37c6b442'}});
            const data = await res.json();
            console.log(data);
            setMatches(data.matches);
            setLoading(false);
        };

        getData();
        // eslint-disable-next-line
    }, [dataToCall])

    return (
        <div className="container"
            style={{ marginTop: '1rem' }}>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <label className="input-group-text" htmlFor="competition">Competition</label>
                </div>
                <select className="custom-select"
                    name="competition"
                    value={dataToCall.competition}
                    onChange={handleChange}>
                    <option value="2021">Premier League</option>
                    <option value="2014">La Liga</option>
                    <option value="2002">Bundesliga</option>
                    <option value="2019">Serie A</option>
                    <option value="2001">UEFA Champions League</option>
                    <option value="2017">Primeira Liga</option>
                    <option value="2016">Championship</option>
                    <option value="2015">Ligue 1</option>
                    <option value="2013">Serie A (Brazil)</option>
                    <option value="2003">Eredivisie</option>
                    {/* <option value="2000">FIFA World Cup</option> */}
                    {/* <option value="2018">Euros</option> */}
                </select>
            </div>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <label className="input-group-text" htmlFor="season">Season</label>
                </div>
                <select className="custom-select"
                    name='season'
                    value={dataToCall.season}
                    onChange={handleChange}>
                    <option value='2000'>2000</option>
                    <option value='2001'>2001</option>
                    <option value='2002'>2002</option>
                    <option value='2003'>2003</option>
                    <option value='2013'>2013</option>
                    <option value='2014'>2014</option>
                    <option value='2015'>2015</option>
                    <option value='2016'>2016</option>
                    <option value='2017'>2017</option>
                    <option value='2018'>2018</option>
                    <option value='2019'>2019</option>
                    <option value='2021'>2021</option>
                </select>
            </div>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <label className="input-group-text" htmlFor="matchday">Matchday</label>
                </div>
                <select className="custom-select"
                    name='matchday'
                    onChange={handleChange}
                    value={dataToCall.matchday}>
                    <MatchOptions />
                </select>
            </div>

            <h2 className='text-center'>{`Matchday ${dataToCall.matchday}`}</h2>

            <div className="card-columns">
                {loading ? <Spinner /> : matches.map(match => <MatchListItem key={match.id} match={match} />)}
            </div>

        </div>
    )
}

export default MatchList
