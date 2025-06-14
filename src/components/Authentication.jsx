import {  useState } from "react"
import { useAuth } from "../context/AuthContext"


export default function Authentication(props) {
  const {handleCloseModal} = props
  const [isRegistration,setIsRegistration] = useState(false)
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [isAuthenticated, setIsAuthentication] = useState(false)
  
  const [error, setError] = useState(null)
  const {signup, login} = useAuth()



  async function handleAuthenticate(){
    if (!email || !email.includes("@") || !password || password.length < 6 || isAuthenticated){
      return
    }

    try{
setIsAuthentication(true)
setError(null)
    if (isRegistration) {
      //register a user
      await signup(email, password)
    }else{
      //login a user
      await login(email,password)
    }
    handleCloseModal()
    } catch (err) {
      console.log(err.message)
      setError(err.message)
    } finally{
      setIsAuthentication(false)
    }




    
  }

  return (
  <>
  <h2 className="sign-up-text">{isRegistration ? "Sign Up" : "Login"}</h2>
  <p>{isRegistration ?"Create an account" : "Sign in to your acount!"}</p>
  {error && (
    <p>❌{error}</p>
  )}
  <input value={email} onChange={(e)=>{setEmail(e.target.value)}}
  placeholder="Email"/>
  <input value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="********" type="password"/>
  <button onClick={handleAuthenticate}><p>{ isAuthenticated ? "Authenticating..." : "Submit"}</p></button>
  <hr/>
  <div className="register-content">
    <p>{isRegistration ? "Already have an account?" :'Don\'t have an account?'}</p>
    <button onClick={()=>{setIsRegistration(!isRegistration)}}><p>{isRegistration ? "Sign In" : "Sign Up"}</p></button>
  </div>
  </>
  )
}
