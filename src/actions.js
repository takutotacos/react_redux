export const ADD_TODO ='ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBLITY_FILTER = 'SET_VISIBILITY_FILTER';

let nextTodo = 0;

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export function addTodo(text) {
    return {
        type: ADD_TODO,
        id: nextTodo++,
        text
    }
}

export function toggleTodo(id) {
    return {
        type: TOGGLE_TODO,
        id
    }
}

export function setVisibilityFilter(filter) {
    return { type: SET_VISIBLITY_FILTER, filter }
}