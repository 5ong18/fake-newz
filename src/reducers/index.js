import { combineReducers } from "redux";
import articles from './articles_reducers';
import gallery from './galleries_reducer';

const rootReducer = combineReducers ({
    articles,
    gallery
})

export default rootReducer;