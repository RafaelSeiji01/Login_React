import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-emerald-200'>
      <header className='bg-yellow-200 text-3xl'>
        <h1>Login</h1>
      </header>
    </div>
  )
}

export default App
