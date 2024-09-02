const { createApp } = Vue

  createApp({
    data() {
        return {
          todos: [
              { text: "Svegliarsi la mattina", 
                done: true},
              { text: "Aprire Zoom", 
                done: true},
              { text: "Non fare nulla", 
                done: false},
              { text: "Studiare", 
                done: true},
              { text: "Seguire lezione", 
                done: true},
              { text: "Dormire", 
                done: false},
              { text: "Fare domande", done: true}
          ],
          newTodo: ''
        };
  },
  methods: {
    addTodo() {
      const cleanTodo = this.newTodo.trim();

      if (cleanTodo != '') {
        this.todos.push({
          text: cleanTodo,
          done: false
        });

        this.newTodo = '';
      }
    },
    removeTodo(i) {
      this.todos.splice(i, 1);
    }
  }
  }).mount('#app')