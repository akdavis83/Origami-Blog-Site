import {useState} from 'react'
import { useAuth } from '../context/auth'
import {useNavigate} from 'react-router-dom'

const Register = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')

  const {register, setIsAuth} = useAuth()
  const navigate = useNavigate()

  const submitHandler = (e)=>{
    e.preventDefault();
    if(!username|| !password )
      alert('Please fill in the form ')
    if(password!=password2)
      alert('Password not matching')
    register({username, password})
    setIsAuth(true)
    setPassword('')
    setUsername('')
    navigate('/login')
  }
  return (
    <div className="Register">
      <h1>Register</h1>
      <form onSubmit={submitHandler}>
        <div className="form-control">
          <label htmlFor="">Email</label>
          <input type="email"  id="email" name="username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password"  id="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <div className="form-control">
          <label htmlFor="password2">Re-password</label>
          <input type="password"  id="password2" name="password2" value={password2} onChange={(e)=>setPassword2(e.target.value)}/>
        </div>
        <div className="form-control">
          <button type="submit"> Regsiter</button>
        </div>
      </form>

    </div>
  )
}

export default Register