import React, { useState } from 'react';
import './Todolist.css'; // Corrected import for CSS file

export default function Todolist() {
    const [inputval, setInputval] = useState(""); // For adding new tasks or editing current tasks
    const [todo, setTodo] = useState([]);
    const [editIndex, setEditIndex] = useState(null); // Index of the task being edited
    const [editValue, setEditValue] = useState(""); // Value of the task being edited
    const [error, setError] = useState(""); // To store validation errors

    // Create a new todo item
    function createTodo() {
        if (inputval.trim() === "") {
            setError("Task cannot be empty.");
            return; // Prevent adding empty todos
        }
        setTodo((todo) => [...todo, inputval]);
        setInputval(""); // Clear input after adding
        setError(""); // Clear any existing errors
    }

    // Delete a todo item
    function deleteTodo(index) {
        setTodo((todo) => todo.filter((_, i) => i !== index));
    }

    // Start editing a specific todo item
    function startEdit(index) {
        setEditIndex(index);
        setEditValue(todo[index]); // Set the current task's value for editing
        setError(""); // Clear any existing errors
    }

    // Save the edited todo item
    function editTodo() {
        if (editValue.trim() === "") {
            setError("Task cannot be empty.");
            return; // Prevent updating with an empty value
        }
        setTodo((todo) =>
            todo.map((item, index) =>
                index === editIndex ? editValue : item // Update the item at editIndex
            )
        );
        setEditIndex(null); // Clear edit mode
        setEditValue(""); // Clear edit value
        setError(""); // Clear any existing errors
    }

    return (
        <div>
            <input
                className="input-container"
                value={editIndex !== null ? editValue : inputval} // Use editValue when editing, otherwise inputval
                type="text"
                placeholder={editIndex !== null ? 'Edit task...' : 'Add task...'}
                onChange={(e) => {
                    if (editIndex !== null) {
                        setEditValue(e.target.value); // Update editValue during edit
                    } else {
                        setInputval(e.target.value); // Update inputval when adding new tasks
                    }
                    setError(""); // Clear error when user starts typing
                }}
            />
            <button onClick={editIndex !== null ? editTodo : createTodo}>
                {editIndex !== null ? 'Save' : 'Create Todo'}
            </button>
            {error && <p className="error-message">{error}</p>} {/* Display error message */}
            <ul className="task-list">
                {todo.map((task, index) => (
                    <li key={index} className="task-item">
                        {editIndex === index ? (
                            <div>
                                {/* This section is handled by the input field and Save button */}
                                <button onClick={editTodo}>Save</button>
                                <button onClick={() => setEditIndex(null)}>Cancel</button>
                            </div>
                        ) : (
                            <div className="task-content">
                                {task}
                                <div className="action-buttons">
                                    <button onClick={() => startEdit(index)}>Edit</button>
                                    <button onClick={() => deleteTodo(index)}>Delete</button>
                                </div>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}
