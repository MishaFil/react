import React, {useState} from 'react';
type ListElemet ={
    name: string,
    desc:string
}
const Todolist = () => {
    const [name, setName] = useState('')
    const [desc, setDesc] = useState('')
    const [list,setList] = useState<ListElemet[]>([])
    const AddElement = () =>{
        setList([{
            name:name,
            desc:desc
        }])
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
                onChange={(e)=>setName(e.target.value)}
            />
            <div>
                <button onClick={()=>AddElement()}>
                    Добавить в список
                </button>
            </div>

        </div>
    );
};

export default Todolist;