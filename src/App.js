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
       <small>
       <footer>
      Brain- stormed by <em>Shirin Eldris</em> 🤖, {""}
   <a href="#"
    className="purple"
    target="_blank"
    rel="no opener noreferrer">
    Open-Sourced on GitHub
     </a>
   <a href="#"
    className="green"
    target="_blank"
    rel="no opener noreferrer">
    {" "}
     Netlify hosted
     </a>
    </footer>
    </small>
   </div>
  </div>
 );
}


