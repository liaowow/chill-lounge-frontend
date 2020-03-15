import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Auth from './Auth'
import Guide from './GuideContainer'
import Boards from './BoardContainer'
import Results from './ResultContainer'
import '../Stylesheets/master.scss'

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Auth} />
            <Route exact path="/guide" component={Guide} />
            <Route exact path="/results" component={Results} />
            <Route exact path="/boards" component={Boards} />
        </Switch>
    )
}