//tek bir görev bileşeni

import { toggleTask } from "./taskSlice";
import { useDispatch } from "react-redux";

function Task({task}) {
  // Redux'un useDispatch hook'u ile store'a erişiyoruz
    const dispatch = useDispatch();
    
    // Göre tıklandığında çalışacak fonksiyon
    const handleToggle = () => {
        dispatch(toggleTask({ id: task.id }));
    };
    // Görev tamamlandıysa stil uyguluyoruz
    const taskStyle = {
        textDecoration: task.completed ? 'line-through' : 'none',
        cursor: 'pointer'
    };
    return (
        <div>
        <p style={taskStyle} onClick={handleToggle}>
            {task.text}
        </p>
        </div>
    )
}
export default Task;