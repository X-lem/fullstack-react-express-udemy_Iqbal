import React, { Component } from 'react'
import { connect } from 'react-redux';

import * as ACTIONS from '../store/actions/actions';
import axios from 'axios';
import history from '../utils/history';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


class editpost extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: ''
        }
    }

    componentDidMount = () => {
        this.setState({
            title: this.props.location.state.post.post.title,
            body: this.props.location.state.post.post.body
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const user_id = this.props.db_profile[0].uid;
        const username = this.props.db_profile[0].username;
        const pid = this.props.location.state.post.post.pid;
        const title = event.target.title.value;
        const body = event.target.body.value;

        const data = {
            title,
            body,
            pid,
            user_id,
            username
        }

        axios.put("/api/put/post", data)
        .then(res => console.log(res))
        .catch(err => console.log(err))
        .then(setTimeout(() => history.replace('/profile'), 700))
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <TextField id='title' label='title' name='title' margin='normal' value={this.state.title} onChange={this.handleChange}/>
                    <TextField id='body' label='body' name='body' multiline rows='4' margin='normal' value={this.state.body} onChange={this.handleChange}/>
                    <button type="submit">Submit</button>
                </form>
                <button onClick={() => history.goBack()}>Cancel</button>
            </div>
        )
    }
}


function mapStateToProps(state) {

    return {
      db_profile: state.auth_reducer.db_profile
    }
}

  
export default connect(mapStateToProps)(editpost);
