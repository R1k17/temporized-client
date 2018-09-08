import {API_BASE_URL} from './config';

export async function getTodos() {
    return fetch(`${API_BASE_URL}/todos`)
        .then(res => {
            if(!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
}

export async function addTodo(task) {
    return fetch(`${API_BASE_URL}/todos`, {
            method: 'post',
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
            body: JSON.stringify({name: task})
        })
        .then(res => {
            if(!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
}

export async function deleteTodo(id) {
    const deleteUrl = `${API_BASE_URL}/todos/${id}`;
    return fetch(deleteUrl, {
        method: 'delete'
    })
    .then(res => {
        if(!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    })
}

export async function toggleTodo(task) {
    const updateUrl = `${API_BASE_URL}/todos/${task._id}`; 
    return fetch(updateUrl, {
            method: 'put',
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
            body: JSON.stringify({completed: !task.completed})
        })
        .then(res => {
            if(!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
}