import logo from "./SheCodes-logo.png";
import Dictionary from "./Dictionary";
import './App.css';

export default function App() {
 return (
  <div className="App">
   <div className="container">
    <div className="card">
     <div className="card-body">
      <header className="App-header">
       <img src={logo}
        alt="SheCodes logo"
        className="img-fluid"
       />
      </header>
       
      <main>
       <Dictionary />
      </main>
       
      <footer className="App-footer">
       <small>
        <strong>
         <em>Shirin Eldris</em>
        </strong> 🌍 {""}
        <a href="https://github.com/Sibidomaskuli/dictionary.git"
         className="purple"
         target="_blank"
         rel='noopener noreferrer'>
         GitHub
     </a>
      
       </small>
      </footer>
     </div>
         
    </div>
   </div> {/*container*/}
  </div>
 );
}


