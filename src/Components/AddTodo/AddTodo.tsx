import { ChangeEvent, useState } from "react";
import styled from "styled-components";
import { Todo } from "../../models/Todo";

interface IAddTodoProps {
    saveTodo(newTodo: Todo): void
}

const AddButton = styled.button`
    color: #327035;
    background-color: #ffeebf;
    border-radius: 5px;
    width: 100px;
    margin-left: 20px;
`

const AddTodo = (props : IAddTodoProps) => {

    const [todoText, setTodoText] = useState("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTodoText(e.target.value);
    };

    const handleClick = () => {
        let todo = new Todo(todoText);
        props.saveTodo(todo);
        setTodoText("")
    }

    return(
        <div>
            <input type="text" onChange={handleChange} value={todoText} ></input>
            <AddButton type="button" onClick={handleClick} >Lägg till</AddButton>
        </div>

    )
}
export default AddTodo