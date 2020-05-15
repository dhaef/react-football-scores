import React, { Fragment } from 'react'

const MatchOptions = () => {
    const matchDays = [];

    for (let i = 1; i <= 38; i++) {
        matchDays.push(i);
    }

    return (
        <Fragment>
            <option value='' disabled>Select Matchday</option>
            {matchDays.map(matchDay => <option value={matchDay} key={matchDay}>{matchDay}</option>)}
        </Fragment>
    )
}

export default MatchOptions
