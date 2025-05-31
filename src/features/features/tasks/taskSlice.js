//Redux Toolkit'in createSlice özelliğini kullanırız.
//Görevler dizisi, görev ekleme, silme, tamamlama gibi işlemleri tanımlarız.
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    { id: 1, text: "Learn HTML", completed: true },
    { id: 2, text: "Learn CSS", completed: true },
    { id: 3, text: "Learn JS", completed: false },
  ],
};

const taskSlice = createSlice({
    name: 'tasks',
    initialState,          //görevlerin başlangıç verisi
    reducers: {            //Hangi işlemler yapılabilir
        addTask: (state, action) => {
            state.items.push({
                id: Date.now(),
                text: action.payload.text,
                completed: false,
            });
        },
        toggleTask: (state, action) => {
            const task = state.items.find((t) => t.id === action.payload.id);
            if (task) {
              task.completed = !task.completed;  // görev bulunduysa completed durumunu tersine çevirir
            }
        }
    }
})
export const { addTask, toggleTask } = tasksSlice.actions;
export default tasksSlice.reducer;
