

Vue.component('todo-input', {
    template: `
    <form  @submit.prevent="pushToList">
        <label for="Todoinput">
            <input v-model="title" type="text" id="Todoinput" placeholder="todo...">
        </label>
        <button type="submit">To do</button>
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
        <li class="toDo" v-for="item in todolist">
            {{item.title}}
        </li>
    </ul>
    `,
    data() {
        return {
            title: null,
        }
    },
})

let vm = new Vue({
    el: '#root',
    data: {
        title: "to do list",
        toDoList: ['hello', 'hello', 'hello'],
    },
    methods: {
        pushToList(item) {
            console.log('helloooooo', item)
            this.toDoList.push(item);
        }
    }
})