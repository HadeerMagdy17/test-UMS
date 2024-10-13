import { useContext, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaArrowCircleLeft, FaArrowCircleRight, FaHome, FaUserShield } from "react-icons/fa";
import { FaUsersLine } from "react-icons/fa6";
import { MdLogout } from "react-icons/md";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "../Context/AuthContext";

export default function SideBar() {
  let [isCollapsed, setIsCollapsed] = useState(false);
  let navigate=useNavigate()
  let{userData}=useContext(AuthContext)
  let toggleCollapse=()=>{

    setIsCollapsed(! isCollapsed)
  }
  let logOut = () => {
    localStorage.removeItem("userToken");
    navigate("/login");
  };

  return (
    <div className="sidebarContainer vh-100">
      <Sidebar collapsed={isCollapsed} className="vh-100">
        <div className="text-center my-5">
          <div>
            {isCollapsed ?<FaArrowCircleRight onClick={toggleCollapse} size={30} className="my-2" />
            :
            <FaArrowCircleLeft onClick={toggleCollapse} size={30} className="my-2"/>
            }
            
          </div>
          <img src={userData?.image} className="w-50 rounded-circle" alt="profile"/>
          <h6 className="my-2">{userData?.firstName} {userData?.lastName}</h6>
          <h6 className="text-warning">Admin</h6>
        </div>

        <Menu>
          <MenuItem icon={<FaHome  size={25}/>} component={<Link to="/dashboard" />}>
            Home
          </MenuItem>
          <MenuItem
            icon={<FaUsersLine size={25}/>}
            component={<Link to="/dashboard/users-list" />}
          >
            {" "}
            Users
          </MenuItem>
          <MenuItem
            icon={<FaUserShield size={25}/>}
            component={<Link to="/dashboard/user-data" />}
          >
            Add user
          </MenuItem>
          <MenuItem
            icon={<CgProfile size={25}/>}
            component={<Link to="/dashboard/profile" />}
          >
            {" "}
            Profile
          </MenuItem>
          <MenuItem onClick={logOut} icon={<MdLogout size={25}/>} component={<Link to="" />}>
            {" "}
            Logout
          </MenuItem>
        </Menu>
      </Sidebar>
      ;
    </div>
  );
}
