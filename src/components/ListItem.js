import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export class ListItem extends Component {
    listDecor = () => {
        return {
            display: 'center',
            background: 'black',
            height: '95px',
            margin: '18px auto',
            padding: '10px',
            borderBottom: '1px black solid',
            borderRadius: '8px',
            textDecorationColor: this.props.todo.completed ? 'green' :
                'none',
        }
    }

    markComplete = (e) => {
        console.log(this.props)
    }
    render() {
        const { id, title } = this.props.todo;
        return (
            <div className="checkboxstyle" id="listandcheck" style={this.listDecor()}>
                <p> <br />
                    <input type="checkbox" className="checklist" onChange={this.props.markComplete.bind
                        (this, id)} /> {' '}
                    {title}
                    <span>   <FontAwesomeIcon className="faicons" icon={faTrash} onClick={this.props.delTodo.bind(this, id)} />  </span>


                </p>
            </div>
        )
    }
}


ListItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default ListItem

