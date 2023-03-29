

Vue.component('todo-input', {
    template: `
    <form  @submit.prevent="pushToList">
        <label for="Todoinput">
            <input required v-model="title" type="text" id="Todoinput" placeholder="todo...">
        </label>
        <button class="addBtn" type="submit">To do</button>
    </form>`,
    data() {
        return {
            title: null,
            index: 0
        }
    },
    methods: {
        pushToList() {
            const item = {
                id: ++this.index,
                todo: this.title
            };
            this.$emit('add-to-list', item)
            this.title = null;
        }
    }
})


Vue.component('todo-list', {
    props: {
        todolist: {
            type: Array,
            required: true
        }
    },
    template: `
    <ul class="toDoList">
        <li class="todo" v-for="item in todolist">
            {{item.todo}}
            <span class="close" @click="deleteTodo(item.id)">&#x2715</span>
        </li>
    </ul>
    `,
    data() {
        return {
            title: null,
        }
    },
    methods: {
        deleteTodo(id) {
            this.$emit('delete-from-list',id)
        }
    }
})

let vm = new Vue({
    el: '#root',
    data: {
        title: "to do list",
        todolist: [],
    },
    methods: {
        pushToList(item) {
            console.log('helloooooo', item)
            this.todolist.push(item);
            // console.log()
        },

        removeFromList(id) {
            console.log('hellllllllll')
            this.todolist = this.todolist.filter((item) => item.id !== id)
        }
    }
})