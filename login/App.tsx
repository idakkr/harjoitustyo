import { useState, useEffect, useCallback } from 'react'
import LoginForm from './LoginForm'
import './App.css'
import ProductList from './ProductList'

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

  useEffect(() => {
    var _mtm = window._mtm = window._mtm || []; 
    _mtm.push({'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start'});
    const d=document, g=d.createElement('script'), s: HTMLScriptElement=d.getElementsByTagName('script')[0];
    g.async=true; g.src='https://pilvipalvelut-matomo.2.rahtiapp.fi/js/container_odKpPoAu.js'; 
    if (s && s.parentNode) {
      s.parentNode.insertBefore(g,s); 
    }
  }, []);

      <div className="card">
        <button onClick={(handleClick)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

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
          Laskurin arvo on {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <p>
          <LoginForm />
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

          <ProductList />

    </>
  )
}

export default App
