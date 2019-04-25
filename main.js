// ACTIONS
const addAction = {
  type: 'ADD',
};

const bigaddAction = {
  type: 'BIGADD',
}

const removeAction = {
  type: 'REMOVE',
};

const bigremoveAction = {
  type: 'BIGREMOVE',
}

const resetAction = {
  type: 'RESET',
}

// REDUCER
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'ADD':
      return state + 1;
    case 'REMOVE':
      return state - 1;
    case 'BIGADD':
      return state + 10;
    case 'BIGREMOVE':
      return state - 10;
    case 'RESET':
      return state = 0;
    default:
      return state;
  }
}

// STORE
const { createStore } = Redux;
const store = createStore(counterReducer);


// MAIN
const renderStore = document.getElementById('render-store');
const render = () => {
  renderStore.innerHTML = store.getState();
}

store.subscribe(render);
render();

const add = document.getElementById('add');
add.addEventListener('click', () => {
  store.dispatch(addAction)
});

const remove = document.getElementById('remove');
remove.addEventListener('click', () => {
  store.dispatch(removeAction)
});

const bigadd = document.getElementById('bigadd');
bigadd.addEventListener('click', () => {
  store.dispatch(bigaddAction)
});

const bigremove = document.getElementById('bigremove');
bigremove.addEventListener('click', () => {
  store.dispatch(bigremoveAction)
});

const reset = document.getElementById('reset');
reset.addEventListener('click', () => {
  store.dispatch(resetAction)
});