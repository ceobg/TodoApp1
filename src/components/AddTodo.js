import React, { Component } from 'react';

export class AddTodo extends Component {
    state = {
        title: ""
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: '' });
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {
        return (
            <form id="form-submit" onSubmit={this.onSubmit}>
                <span>
                    <input
                        id="my-add-todo"
                        className="form-control-add"
                        type="text"
                        name="title"
                        placeholder="Add item.."
                        value={this.state.title}
                        onChange={this.onChange} />   <span> <button
                            id="my-butts"
                            className="btn btn-dark">Submit</button> </span>
                </span>

            </form>
        )

    }
}

export default AddTodo;