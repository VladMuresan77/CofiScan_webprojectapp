import { useState} from "react"
 
import Authentication from "./Authentication";
import Modal from "./Modal";
import { useAuth } from "../context/AuthContext";

export default function Layout(props) {
  const { children } = props
const [showModal, setShowModal] = useState(false)
const {globalUser, logout} =useAuth()
  const header = (
    <header className="site-header">
      <div className="container">
        <h1 className="text-gradient site-title animate-title" >CofiScan</h1>
        <p className="animate-subtitle"> For Those Who Live on Coffee</p>
      </div>
      {globalUser ? (<button className="btn-p" onClick={logout}>
        
        <p>Logout</p>
      </button>) : (
        
        <button className="btn-p"onClick={()=>{setShowModal(true)}}>
        <i className="fa-solid fa-mug-hot animate-subtitle"></i>
        <p>Sign up free</p>
      </button>)}
    </header>
  );
  const footer = (
    <footer style={{ color: '#555', textAlign: 'center', padding: '1rem' }}>
  <p>
    <span className="text-gradient-1">CofiScan</span> was created by{" "}
    <a
      href="https://github.com/VladMuresan77"
      target="_blank"
      rel="noopener noreferrer"
    >
      Vlad Muresan
    </a>.
  </p>

  <p>
    Inspired by and built using the {" "}
    <a
      href="https://www.fantacss.smoljames.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      FantaCSS
    </a>{" "}
    design library by Smoljames.
  </p>

  <p>
    Check out the project on{" "}
    <a
      href="https://github.com/VladMuresan77"
      target="_blank"
      rel="noopener noreferrer"
    >
      GitHub
    </a>!
  </p>

  
  <div
    style={{
      marginTop: '1rem',
      display: 'flex',
      justifyContent: 'flex-start',
      gap: '2rem',
      fontSize: '1.5rem',
    }}
  >
    <a
      href="https://github.com/VladMuresan77"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub"
    >
      <i className="fa-brands fa-github" style={{ color: '#333' }}></i>
    </a>
    <a
      href="https://www.linkedin.com/in/vlad-muresan-b55349266/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
    >
      <i className="fa-brands fa-linkedin" style={{ color: '#0077b5' }}></i>
    </a>
    <a
      href="https://x.com/VLADM999"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Twitter"
    >
      <i className="fa-brands fa-x-twitter" style={{ color: '#333' }}></i>
    </a>
  </div>
</footer>


  );

  function handleCloseModal(){
    setShowModal(false)
  }
  return (
    <>
    {showModal && (
      <Modal handleCloseModal={()=>{setShowModal(false)}}>
      <Authentication handleCloseModal = {handleCloseModal}/>
    </Modal>
    )}
      {header}
      <main >{children}</main>
      {footer}
    </>
  );
}
