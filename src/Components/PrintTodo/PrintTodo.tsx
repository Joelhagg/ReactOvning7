import { Todo } from "../../models/Todo"
import styled from "styled-components"


    interface IPrintTodoProps {
        todo: Todo;
        toggleTodo(todo: Todo): void
    }

    const Header = styled.h1`
        color: green;
        cursor: pointer;
    `

    const DoneTodo = styled.div`
        cursor: pointer;
        text-decoration: line-through;
        color: red;
    `;

    const NotDoneTodo = styled.div``;


const PrintTodo = (props: IPrintTodoProps) => {

    const handleClick = () => {
        props.toggleTodo(props.todo)
    }

    return(
        <>
        <Header>
            {props.todo.done ? (<DoneTodo onClick={handleClick}> {props.todo.text} </DoneTodo>)
            :
            (<NotDoneTodo onClick={handleClick}> {props.todo.text} </NotDoneTodo>)
            }
        </Header>
        </>
    )
}
export default PrintTodo