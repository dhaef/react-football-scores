import React from 'react'
import PropTypes from 'prop-types'

const MatchListItem = ({ match }) => {

    const matchDayPlayed = () => {
        const time = new Date(match.utcDate);
        if (match.status === 'POSTPONED') {
            return <div className="card-body">
                <h6 className="card-title">Match Postponed</h6>
                <p className="card-text"><span>{match.homeTeam.name}</span> Vs. <span>{match.awayTeam.name}</span></p>
            </div>
        } else {
            return <div className="card-body">
                { match.status === "LIVE" && <h3 className="card-title text-center">{match.competition.name}</h3>}
                <p className={`card-text text-center ${match.score.winner === 'AWAY_TEAM' ? 'winner' : null}`}
                    >
                    {match.awayTeam.name}{': '}{match.score.fullTime.awayTeam}
                </p>
                <p className="card-text text-center">@</p>
                <p className={`card-text text-center ${match.score.winner === 'HOME_TEAM' ? 'winner' : null} `}
                    >
                    {match.homeTeam.name}{': '}{match.score.fullTime.homeTeam}
                </p>
                <p className="card-text text-center">{time.toUTCString()}</p>
            </div>
        }
    }

    return (
        <div className='card'>
            {matchDayPlayed()}
        </div>
    )
}

MatchListItem.propTypes = {
    match: PropTypes.object.isRequired,
}

export default MatchListItem
