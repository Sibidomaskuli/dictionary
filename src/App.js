import Dictionary from "./Dictionary"; 
import './App.css';

export default function App() {
 return (
  <div className="App">
   <div className="container">
    <header className="App-header"></header>
    <main>
     <Dictionary />
    </main>
    <footer>
      Brain- stormed by <em>Shirin Eldris</em> 🤖, {""}
   <a href="/"
    className="purple"
    target="_blank"
    rel="noreferrer">
    Open-Sourced on GitHub
     </a>
   <a href="/"
    className="green"
    target="_blank"
    rel="noreferrer">
    {" "}
     Netlify hosted
     </a>
    </footer>
   </div>
  </div>
 );
}


