import React, { useState } from "react";
import Link from "./Link";
import { Menu, X } from "lucide-react";
const navData = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "About",
    path: "/about",
  },
  {
    id: 3,
    name: "Services",
    path: "/services",
  },
  {
    id: 4,
    name: "Portfolio",
    path: "/portfolio",
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact",
  },
];

const NavBar=()=>{
  const [open,setOpen]=useState(false)
  const links= navData.map(route=><Link route={route} key={route.id} ></Link>)
  return (
    <nav className="flex justify-between mx-7 mt-4">
     <span className="flex" onClick={()=>setOpen(!open)}> 
      { open ? <X className="md:hidden"></X> : <Menu className="md:hidden"></Menu> }
      
      <ul className={`md:hidden absolute duration-1000
        ${ open ? 'top-10':'-top-40'} 
        bg-amber-200`}>
        {
          links
        }
      </ul>
       <h3 className="ml-4">My NaveBar</h3>
     </span>
     <ul className="md:flex hidden">
       {
       links
      }
     </ul>
        {/* <ul className="flex">
          {
          navData.map(route=><li className="mr-10">
            <a href={route.path}>{route.name} </a>
            </li>)
        }
        </ul> */}
        <button className="btn btn-primary">Sign In</button>
    </nav>
  );
};

export default NavBar;
