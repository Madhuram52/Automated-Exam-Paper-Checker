// App.js
import './App.css';
import { useState, useCallback } from 'react';
import Home from './Pages/Home';
import Signup from './Components/AuthComponents/Signup';
import Login from './Components/AuthComponents/Login';
import Auth from './Pages/Auth';
import Upload from './Pages/Upload';
import Score from './Pages/Score';
import { Router, Route, Routes, Navigate } from 'react-router-dom';
import Layout from './Layouts/Layout';
import UploadPaper from './Pages/UploadPaper';
import { AuthContext } from './Context/auth-context';

function App() {

  const [isLoggedIn, setIsLoggedin] = useState(false);

  const login = useCallback(() => {
    setIsLoggedin(true)
  }, [])

  const logout = useCallback(() => {
    setIsLoggedin(false)
  }, [])

  let routes;
  if (isLoggedIn) {
    routes = (
      <>
        <Route path="/" element={<Home />} />
        <Route path="/:uid/upload/">
          <Route index element={<Upload />}></Route>
          <Route path="uploadpaper" element={<UploadPaper />} />
          <Route path="score" element={<Score />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </>
    );
  }
  else {
    routes = (
      <>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="*" element={<Navigate to="/auth" replace />} />
      </>
    );
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}>
      <Routes>
        {/* Wrap routes with Layout component */}
        {console.log(isLoggedIn)};
        <Route path="/" element={<Layout />}>
          {routes}
        </Route>
      </Routes>
    </AuthContext.Provider>
  );
}

export default App;



























// import './App.css';
// import Home from './Pages/Home';
// import User from './Pages/User';
// import Auth from './Pages/Auth';
// import './Pages/User.css';
// import Upload from './Pages/Upload';
// import Uploadmcq from './Upload pages/Uploadmcq';
// import Uploadfb from './Upload pages/Uploadfb';
// import Uploadoneword from './Upload pages/Uploadoneword';
// import Uploadmatch from './Upload pages/Uploadmatch';
// import Score from './Upload pages/Score';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import About from './Components/HomeCompnents/About';
// import Layout from './Layouts/Layout';

// function App() {
//   let routes = (
//     <Routes>
//       {/* Wrap routes with Layout component */}
//       <Route element={<Layout />}>
//         <Route path="/" element={<Home />} />
//         <Route path="/user/:userId" element={<User />} />
//         <Route path="/upload/">
//           <Route index element={<Upload />}></Route>
//           <Route path="mcq" element={<Uploadmcq />} />
//           <Route path="fb" element={<Uploadfb />} />
//           <Route path="oneword" element={<Uploadoneword />} />
//           <Route path="match" element={<Uploadmatch />} />
//           <Route path="score" element={<Score />} />
//         </Route>
//         <Route path="/about" element={<About />} />
//       </Route>
//       <Route path="/auth" element={<Auth />} />

//       {/* <Route path="/uploadanswer" element={<Uploadsample />} /> */}
//       {/* <Route path="/auth" element={<Auth />} />
//       // <Route path="*" element={<Navigate to="/auth" replace />} /> */}
//     </Routes>
//   )
//   return (
//     <main>
//       {/* <Home></Home> */}
//       {routes}
//     </main>
//   );
// }
// 
// export default App;
