import { Routes, Route } from "react-router-dom";
import Aside from "./components/Aside";
import Footer from "./components/Footer";

import Navigation from "./components/Navigation";
import Publications from "./pages/Publications";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Share from "./pages/Share";
import NotFound from "./pages/NotFound";
import PrivateRoute from "./PrivateRoute";
import { useEffect } from "react";
import { usePost } from "./context/posts";

const App = () => {


  const {fetchPosts} = usePost()
  useEffect(()=>{fetchPosts()}, [])
  return (
    <>
      <Navigation  />
      <div className="Container">
        <Aside  />
        <Routes>
          <Route path="/" element={<Publications />}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/app" element={<PrivateRoute/>}>
          <Route path="profile" element={<Profile />}/>
          <Route path="share" element={<Share/>}/>
          </Route>
          <Route path="*" element={<NotFound/>}/>    
        </Routes>
      </div>

      <Footer  />
    </>
  );
};

export default App;
