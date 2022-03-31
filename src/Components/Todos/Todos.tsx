import { useState } from "react"
import styled from "styled-components"
import { Todo } from "../../models/Todo"
import AddTodo from "../AddTodo/AddTodo"
import PrintTodo from "../PrintTodo/PrintTodo"


const Button = styled.button`
    color: #000000;
    background-color: #db65797d;
    border-radius: 5px;
`

const HrLine = styled.hr`
border: solid #c78f2775 1px;
width: 50%;
`

const Todos = () => {
    const [todos, setTodos] = useState<Todo[]>([])

    const toggle = (todoToToggle: Todo) => {
        todoToToggle.done = !todoToToggle.done
        setTodos([...todos])
    }

    const save = (todo: Todo) => {
        setTodos([...todos, todo])
    }

    const handleRemove = (index: number) => {
        const tempTodo = [...todos]
        tempTodo.splice(index,1)
        setTodos([...tempTodo])
    }

    return(
        <>
        <h1>Todo lista!</h1>
        
        <AddTodo saveTodo={(save)}></AddTodo>
        <h4>Klicka för att stryka</h4>

        {todos.map((todo, index) => {
            return (
            <div key={index}>
                <PrintTodo key={index} todo={todo} toggleTodo={toggle}></PrintTodo> 
                <br />
                <Button onClick={()=> handleRemove(index)}>Ta bort!</Button>
                <HrLine />
            </div>
            )
        })}

        </>
    )
}
export default Todos