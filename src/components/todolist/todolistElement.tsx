import React from 'react';
type Props = {
    name: string,
    desc: string,
    onDeleteClick: () => void;
}
const ToDoListElement = (props: Props) => {
    const {name, desc,onDeleteClick} = props
    return (
        <div style={{
            display: 'flex', gap:'1em'}}>
            <div>{name}</div>
            <div>{desc}</div>
            <div>
                <button onClick={() => onDeleteClick()}>Delete</button>
            </div>
        </div>
    )
}
export default ToDoListElement;