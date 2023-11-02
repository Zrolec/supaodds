// import React from 'react'
// import 
// {BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
//   BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
//  from 'react-icons/bs'

// function Sidebar({openSidebarToggle, OpenSidebar}) {
//   return (
//     <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
//         <div className='sidebar-title'>
//             <div className='sidebar-brand'>
//                 <BsCart3  className='icon_header'/> Supaodds
//             </div>
//             <span className='icon close_icon' onClick={OpenSidebar}>X</span>
//         </div>

//         <ul className='sidebar-list'>
//             <li className='sidebar-list-item'>
//                 <a href="/">
//                     <BsGrid1X2Fill className='icon'/> Dashboard
//                 </a>
//             </li>
//             <li className='sidebar-list-item'>
//                 <a href="/predictions">
//                     <BsFillArchiveFill className='icon'/> Predictions
//                 </a>
//             </li>
//             <li className='sidebar-list-item'>
//                 <a href="/">
//                     <BsFillGrid3X3GapFill className='icon'/> Accumulator
//                 </a>
//             </li>
//             <li className='sidebar-list-item'>
//                 <a href="/">
//                     <BsPeopleFill className='icon'/> Users
//                 </a>
//             </li>
//             <li className='sidebar-list-item'>
//                 <a href="/">
//                     <BsListCheck className='icon'/> Newsletter
//                 </a>
//             </li>
//             <li className='sidebar-list-item'>
//                 <a href="/">
//                     <BsMenuButtonWideFill className='icon'/> Emails
//                 </a>
//             </li>
//             <li className='sidebar-list-item'>
//                 <a href="/">
//                     <BsFillGearFill className='icon'/> Setting
//                 </a>
//             </li>
//         </ul>
//     </aside>
//   )
// }

// export default Sidebar


import React from 'react';
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGearFill, BsPeopleFill, BsListCheck, BsFillGrid3X3GapFill, BsMenuButtonWideFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? 'sidebar-responsive' : ''}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          <Link to='/'> {/* Use Link instead of <a> */}
            <BsCart3 className='icon_header' /> Supaodds
          </Link>
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <Link to='dashboard'> {/* Use Link instead of <a> */}
            <BsGrid1X2Fill className='icon' /> Dashboard
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to='predictions'> {/* Use Link instead of <a> */}
            <BsFillArchiveFill className='icon' /> Predictions
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to='updatepredictions'> {/* Use Link instead of <a> */}
            <BsFillArchiveFill className='icon' /> Update Predictions
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to='accumulat'> {/* Use Link instead of <a> */}
            <BsFillGrid3X3GapFill className='icon' /> Accumulat
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to='/schedular'> {/* Use Link instead of <a> */}
            <BsMenuButtonWideFill className='icon' /> Schedular
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to='/newsletter'> {/* Use Link instead of <a> */}
            <BsListCheck className='icon' /> Newletter
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to='/users'> {/* Use Link instead of <a> */}
            <BsPeopleFill className='icon' /> Users
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to='/settings'> {/* Use Link instead of <a> */}
            <BsFillGearFill className='icon' /> Settings
          </Link>
        </li>
        {/* Add more navigation items as needed */}
      </ul>
    </aside>
  );
}

export default Sidebar;


