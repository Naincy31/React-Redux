import './App.css';
import { bugAdd, bugDrop, bugResolved } from './store/actionCreators';
import store from './store/store';

function App() {
  return (
    <div>
      <h2>Bug</h2>
      <button onClick={() => store.dispatch(bugAdd('Bug1'))}>Add Bug</button>
      {store.getState()}
      <button onClick={() => store.dispatch(bugResolved(1))}>Resolved Bug</button>
      <button onClick={() => store.dispatch(bugDrop(1))}>Delete Bug</button>
    </div>
  );
}

export default App;
