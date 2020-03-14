import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Auth from './Auth'
import Home from './Home'
import Boards from './BoardContainer'
import Guides from './GuideContainer'
import Results from './ResultContainer'
import '../Stylesheets/master.scss'

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Auth} />
            <Route exact path="/home" component={Home} />
            {/* <Route exact path="/guides" component={Guides} />
            <Route exact path="/results" component={Results} /> */}
            <Route exact path="/boards" component={Boards} />
        </Switch>
    )
}