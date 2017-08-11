import storeFactory from "./storeFactory";

const store = storeFactory();

/*
 store.subscribe(() => { // register a callback for every time an action have been dispatched
   localStorage['redux-store'] = JSON.stringify(store.getState())
 })
*/

export default store;
