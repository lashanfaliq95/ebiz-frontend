import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import styles from './Root.module.css';

const Root = props => {
    return (
        <div className={styles.root__div} >
            <Router>
                <main className={styles.main__div}>
                    <Switch>
                        <Route exact path="/">

                        </Route>
                        <Route exact path="/:id">

                        </Route>
                    </Switch>
                </main>
            </Router>
        </div>
    )
}

export default Root;