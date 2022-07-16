import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import { Dashboard, Admin, Manager } from './component/private/dashboard';
import { Home } from './component/public/home';
import { Route, Routes } from 'react-router-dom';
import { Upload } from './component/private/upload';
import { Login } from './component/login';
import { ChangePassword } from './component/changePassword';
import { About } from './component/public/about';
import { Contact } from './component/public/contact';
import PrivateRoute from './shared/private';
import PublicRoute from './shared/public';
// class App extends Component {
//   constructor(props) {
//     super(props)
//   }

//   render() {
//     return (
//       <div>
//         <Dashboard />
//         <Home />
//       </div>
//       // <div className="App">
//       //   <div className="App-header">
//       //     <img src={logo} className="App-logo" alt="logo" />
//       //     <h2>Welcome to React</h2>
//       //   </div>
//       //   <p className="App-intro">
//       //     To get started, edit <code>src/App.js</code> and save to reload.
//       //   </p>
//       // </div>
//     );
//   }
// }

const App = () => {

  return (

    <div>
      {/* <Navigation /> */}
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path='dashboard' exact element={<Dashboard />} />
          <Route path='admin' exact element={<Admin />} />
          <Route path='manager' exact element={<Manager />} />
          <Route path='uploads' exact element={<Upload />} />
        </Route>
        {/*
        Below is public route
        <Route path='home' exact element={<Home />} /> */}
        <Route element={<PublicRoute />}>

          <Route path='about' element={<About />} />
          <Route path="home" exact element={<Home />} />
          <Route path='contact' element={<Contact />} />
        </Route>

       
        <Route path='' exact element={<Login />} />
        <Route path='login' exact element={<Login />} />
        <Route path='changepassword' exact element={<ChangePassword />} />

      </Routes>
    </div >

  )
}

export default App;
