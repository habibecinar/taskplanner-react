//yeni görev ekleme formu

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "./taskSlice";

function TaskForm() {
    const [title, setTitle] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title.trim()) return;

        dispatch(addTask({ text: title }));
        setTitle('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Yeni görev gir..."
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
            />
            <button type="submit">Ekle</button>
        </form>
    )
}
export default TaskForm;