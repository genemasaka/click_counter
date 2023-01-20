// imports the useState hook from the 'react' library
import { useState } from 'react'

// imports the bootstrap CSS library
import 'bootstrap/dist/css/bootstrap.min.css'

// imports the App.css file
import './App.css';

// main App component
function App() {

// Counter component
function Counter(){
// creates a state variable 'count' with an initial value of 0
const [count, setCount] = useState(0)


// JSX returned by the Counter component which renders card with 
// buttons that can be clicked to increment count and clear count using useState hook
return (
  <>
    <div class="main">
      <div class="card">
        <div class="card-body">
          <div class="card-header">
            <h3>Click Counter</h3>
          </div>
          <div class="card-body mt-3">
            <h5>Current count is:</h5>
            <p>{count}</p>
            <button onClick={() => setCount(count+1)} class="btn btn-dark">Click</button>
            <button onClick={() => setCount(0)} class="btn btn-dark clear">Clear count</button>
          </div>
        </div>
      </div>
    </div>
  </>
)
}
// renders the Counter component
return (
<Counter />
);
}

// exports the App component
export default App;