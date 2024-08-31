const { createApp } = Vue

  createApp({
    data() {
        return {
          todoList: [
              { task: "Svegliarsi la mattina", done: true},
              { task: "Aprire Zoom", done: true},
              { task: "Non fare nulla", done: false},
              { task: "Studiare", done: true},
              { task: "Seguire lezione", done: true},
              { task: "Dormire", done: false},
              { task: "Fare domande", done: true}
          ],
          taskToAdd: ""
        }
  }
  }).mount('#app')