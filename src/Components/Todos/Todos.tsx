import { useState } from "react"
import { Todo } from "../../models/Todo"
import AddTodo from "../AddTodo/AddTodo"
import PrintTodo from "../PrintTodo/PrintTodo"

const Todos = () => {
    const [todos, setTodos] = useState<Todo[]>([])

    const toggle = (todoToToggle: Todo) => {

        todoToToggle.done = !todoToToggle.done

        setTodos([...todos])
    }

    const save = (todo: Todo) => {
        setTodos([...todos, todo])
    }

    const remove = (e: any) => {
        const name = e.target.getAttribute('name')
        setTodos(todos.filter(item => item.text !== name))
    }

    let printHtml = todos.map((todo: Todo, i: number) => {
        return <h2>
                   <PrintTodo key={i} todo={todo} toggleTodo={toggle}></PrintTodo> 
                   <br />
                   <button name={todo.text} onClick={remove} >Radera</button>
                </h2>
    })

    return(
        <>
        <h1>Todo lista!</h1>
        
        <AddTodo saveTodo={save}></AddTodo>
        <h4>Klicka för att stryka</h4>
        {printHtml}        
 
        </>
    )
}
export default Todos