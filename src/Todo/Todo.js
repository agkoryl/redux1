import React from 'react';
import { connect } from 'react-redux';

import './Todo.css';
import { removeToDo, newToDo } from '../store/todos';

const TodoList = props => {

    const handleKeyPress = event => {
        if(event.which === 13) {
            const value = event.target.value;
            props._addtask(value);
            event.target.value = "";
          }
    }

    
    return (
        <div className="table-container">
            <h2>TO DO REDUX LIST</h2>
            <input onKeyPress={handleKeyPress}/>
            <table className="comicGreen todo-table">
            <tbody>
            {
                    props._todos
                        ? props._todos.map(todo => {
                            return <tr key={todo.id}>
                                <td>{todo.text}</td>
                                <td><button type="button" onClick={() => props._removetask(todo.id)}>X</button></td>
                            </tr>

                        })
                        : <div>No todos on your list yet</div>
                }
            </tbody> 
            </table>
        </div>
    )
}

const mapStateToProps = state => ({
    _todos: state.toDos
})

const mapDispatchToProps = dispatch => ({
    _addtask: (toDoValue)=> dispatch(newToDo(toDoValue)),
    _removetask: (id) => dispatch(removeToDo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);