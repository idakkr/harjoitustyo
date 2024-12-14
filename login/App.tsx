import { useState, useCallback } from 'react'
import LoginForm from './LoginForm'
import './App.css'

function App() {
  // Asetetaan cookie 
  const setCookie = (name: string, value: string, days: number) => {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`; 
  }; 

  // Luetaan cookie
  const getCookie = (name: string): number | 0 => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
      const num = parseInt(decodeURIComponent(parts.pop()?.split(';').shift() || ''), 10); 
      return num;
    }
    return 0;
  };

  const [count, setCount] = useState(getCookie(`Count`) | 0 )

  const handleClick = useCallback<React.MouseEventHandler<HTMLButtonElement>>((event) => {
    console.log('Toiminto*(X, Y): (' + event.pageX + ', ' + + event.pageY + ')');
    setCount((count) => count + 1);
    setCookie('Count', "" + count, 1);
  }, [setCookie]);

  <div className="card">
        <button onClick={(handleClick)}>
          Log In {count}
        </button>
        <p>
        </p>
      </div>


return (
  <>
    <div>
    </div>
      <h1>Login to your page</h1>
    <div className="card">
      <p>
      </p>
      <p>
        <LoginForm />
      </p>
    </div>
  </>
)
}

export default App
