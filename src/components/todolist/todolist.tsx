import React, { useState } from 'react';
import ToDoListElement from "./todolistElement";
type ListElemet ={
    name: string,
    desc:string
}
const Todolist = () => {
    const [name, setName] = useState('')
    const [desc, setDesc] = useState('')
    const [list,setList] = useState<ListElemet[]>([])
    const AddElement = () => {
        const newlist = [...list, {
            name: name,
            desc: desc
        }]

        setList(newlist)
        setName(' ')
        setDesc(' ')

    }
    const DeleteEmelent = (index:number) => {
        const filter = list.filter((el, i) => i !== index)
        setList(filter);
    }


    return (
        <div>
            <input
                type="text"
                placeholder={"name"}
                value={name}
                onChange={(e)=>setName(e.target.value)}
            />
            <input
                type="text"
                placeholder={"description"}
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
            />
            <div>
                <button onClick={()=>AddElement()}>
                    Добавить в список
                </button>
            </div>
            <div>
                {list.map((el, i) => <ToDoListElement
                    name={el.name}
                    desc={el.desc}
                    onDeleteClick={()=> DeleteEmelent(i)} 
                />)}
            </div>
        </div>
    );
};

export default Todolist;