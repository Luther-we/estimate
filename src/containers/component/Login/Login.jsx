import React, {PureComponent} from 'react'
import {TextField } from '@material-ui/core'


class Login extends PureComponent {
    render() {
        return (
            <div>
                <TextField
                    id='filled-name'
                    label='Name'
                    value='Thibaut'
                />
            </div>
        )
    }
}

export default Login