// import {  } from 'react';
import React from 'react'
import './MainAdmin.css';



// import Header from './Header'
import Sidebar from './Sidebar'
// import Home from './Home'
// import Predictions from './Predictions';


function MainAdmin() {
//   const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

//   const OpenSidebar = () => {
//     setOpenSidebarToggle(!openSidebarToggle)
//   }

  return (
    <div>
      {/* <Header OpenSidebar={OpenSidebar}/> */}
      {/* <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/> */}
      <Sidebar />
      {/* <Home />
      <Predictions /> */}
    </div>
  )
}

export default MainAdmin