import { combineReducers } from 'redux'

import {
    ADD_TODO,
    TOGGLE_TODO,
    SET_VISIBLITY_FILTER,
    VisibilityFilters
} from "./actions";

const { SHOW_ALL } = VisibilityFilters

function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            console.log(state);
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ];
        case TOGGLE_TODO:
            return state.map(todo =>
                (todo.id === action.id) ? {...todo, completed: !todo.completed} : todo
            )
        default:
            return state;
    }
}

function visibilityFilter(state = SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBLITY_FILTER:
            return action.filter;
        default:
            return state;
    }
}

const todoApp = combineReducers({
    visibilityFilter,
    todos
});

export default todoApp