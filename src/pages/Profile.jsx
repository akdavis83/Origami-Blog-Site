
import { useNavigate } from 'react-router-dom';
import Posts from '../components/Posts';
import { useAuth } from '../context/auth';

const Profile = () => {

  const {logout, setIsAuth} = useAuth()

  const currentUser = JSON.parse(sessionStorage.getItem('user'))

  const navigate = useNavigate()
  const handleLogout = ()=>{
    logout();
    setIsAuth(false);
    
    navigate('/login')
    
  }

  return (
    <div className="Profile">
      <img src="https://png.pngtree.com/png-clipart/20210915/ourmid/pngtree-user-avatar-placeholder-png-image_3918418.jpg" alt="profile-icon" />
      <div className="personal-info">
        <p><span>Email: </span> {currentUser?.username} </p>
        <p><span>Posts: </span>{currentUser?.posts?.length} </p>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <div>
      <h2>3 of your recent posts</h2>
      <Posts posts={currentUser?.posts?.slice(-3).reverse()}/>
    </div>
    </div>
  )
}

export default Profile