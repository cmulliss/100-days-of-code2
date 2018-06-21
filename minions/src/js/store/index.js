// src/store/index.js

import { createStore } from 'redux'
import rootReducer from '../reducers/index'

window.store = store;
window.addArticle = addArticle;

const store = createStore(rootReducer)

export default store
