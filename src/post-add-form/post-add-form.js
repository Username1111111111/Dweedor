/* eslint-disable react/prop-types */
import React from 'react';
import './post-add-form.css';

export default class PostAddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
        this.onValueChange = this.onValueChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onValueChange(e) {
        this.setState({
            text: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.onAdd(this.state.text);
        this.setState({
            text: ''
        });
    }

    render() {
        return (
            <form
                onSubmit={this.onSubmit}
                className='bottom-panel d-flex'>
                <input
                    type="text"
                    placeholder='What are your thoughts'
                    className='form-control new-post-label'
                    onChange={this.onValueChange}
                    value={this.state.text}
                />
                <button
                    type='submit'
                    className='btn btn-outline-secondary'>
                    Add
                </button>
            </form>
        );
    }
}

