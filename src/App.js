import React from 'react'
import './App.css';
import CustomHookUseInput from './components/CustomHookUseInput';

//FOR useContext ONLY
/* export const UserContext = React.createContext()
export const ChannelContext = React.createContext() */

/* FOR useContext AND useReducer ONLY */
/* export const CountContext = React.createContext()

const initialState = 0
const reducer = (state, action) => {
  switch(action) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state -1
    case 'reset':
      return initialState
    default:
      return state
  }
} */

function App() {

  /* FOR useContext ONLY */

  /* return (
      <div className="App">
        <UserContext.Provider value={'Hassan Mahmud'}>
          <ChannelContext.Provider value={'BJIT'}>
            <ContextComponentC />
          </ChannelContext.Provider>
        </UserContext.Provider>
      </div>
  ); */

  /* FOR useContext AND useReducer ONLY */

  /* const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
      <div className="App">
        Count - {count}
        <ComponentM />
        <ComponentN />
        <ComponentO />
      </div>
    </CountContext.Provider>
  ); */

  return (
    <div className="App">
      <CustomHookUseInput />
    </div>
  );
}

export default App;
