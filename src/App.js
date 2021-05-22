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
        className="img-fluid"
        alt="SheCodes logo"
       />
      </header>
       
      <main>
       <Dictionary defaultKeyword="sunset" />
      </main>
       
      <footer className="App-footer">
       <small>
        <strong>
         <em>Shirin Eldris</em>
        </strong>  {""}
        <a href="https://github.com/Sibidomaskuli/dictionary.git"
         className="purple"
         target="_blank"
         rel='noopener noreferrer'>
         GitHub
     </a>🌍
     <a href="https://romantic-knuth-bc966b.netlify.app"
         className="green"
         target="_blank"
         rel='noopener noreferrer'>
         {" "}
     Netlify
     </a>
       </small>
      </footer>
     </div> {/*card-body*/}
         
    </div> {/*card*/}
   </div> {/*container*/}
  </div>
 );
}


