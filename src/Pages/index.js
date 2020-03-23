import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Auth from './Auth'
import Guide from './GuideContainer'
import Boards from './BoardContainer'
import Results from './ResultContainer'
import '../Stylesheets/master.scss'
import { useSelector } from 'react-redux'

export default function Routes() {
    // grab user from store
    const user = useSelector(state => state.user)

    return (
        <Switch>
            <Route exact path="/" component={Object.keys(user).length ? Guide : Auth} />
            <Route exact path="/guide" component={Guide} />
            <Route exact path="/results" component={Results} />
            <Route exact path="/boards" component={Boards} />
        </Switch>
    )
}