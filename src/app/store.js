//Redux’un beyni. Uygulamanın tüm "state" verilerini buradan kontrol ederiz.
// Görev listesi burada tutulur.

import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../features/features/tasks/taskSlice";


export const store = configureStore({
  reducer: {//Uygulamadaki farklı state parçalarını (slice’ları) burada toplarız.
    tasks: tasksReducer,
  },
});
export default store;