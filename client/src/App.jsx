import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useState(() => {
    console.log('Hello World!');
    
    try {
      const fetchData = async () => {
        const response = await fetch('https://backend-test-silk.vercel.app/', {
          type: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const data = await response.json()
        console.log(data)
      }
      console.log('fetching data...');
      
      fetchData();
    }catch (error) {
      console.error(error);
    }


  }, []);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
