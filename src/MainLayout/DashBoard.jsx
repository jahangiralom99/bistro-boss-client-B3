import { NavLink, Outlet } from "react-router-dom";
import { FaAddressCard, FaBagShopping, FaCartPlus, FaHouse, FaMessage } from "react-icons/fa6";
import { BsBookmarkCheckFill, BsFillWalletFill, BsList } from "react-icons/bs";

const DashBoard = () => {

  // TODO: admin users is Comings
  const isAdmin = true;


  
  return (
    <div className="flex">
      <div className="w-64 bg-orange-400 h-screen">
        <h1 className="text-4xl text-center p-5">BistroBoss</h1>
        <p className="text-center">Restaurant</p>
        <ul className="menu p-4 space-y-2">
          {
            isAdmin ? <>
          <li>
            <NavLink className="border" to="/dashBoard/adminHome">
              <FaHouse />
              Admin Home
            </NavLink>
          </li>
          <li>
            <NavLink className="border" to="/dashBoard/addItem">
              <FaAddressCard />
              Add items
            </NavLink>
          </li>
          <li>
            <NavLink className="border" to="/dashBoard/manageItem">
              <BsFillWalletFill />
              Manage items
            </NavLink>
          </li>
          <li>
            <NavLink className="border" to="/dashBoard/manageBooking">
              <BsBookmarkCheckFill />
              Manage bookings
            </NavLink>
          </li>
          <li>
            <NavLink className="border" to="/dashBoard/allUser">
              <BsBookmarkCheckFill />
              all users
            </NavLink>
          </li>
            </> : <>
            <li>
            <NavLink className="border" to="/dashBoard/cart">
              <FaCartPlus></FaCartPlus>
              My Cart
            </NavLink>
          </li>
          <li>
            <NavLink className="border" to="/dashBoard/home">
              <FaHouse />
              User Home
            </NavLink>
          </li>
          <li>
            <NavLink className="border" to="/dashBoard/reservation">
              <FaAddressCard />
              reservation
            </NavLink>
          </li>
          <li>
            <NavLink className="border" to="/dashBoard/history">
              <BsFillWalletFill />
              payment history
            </NavLink>
          </li>
          <li>
            <NavLink className="border" to="/dashBoard/booking">
              <BsBookmarkCheckFill />
              My Booking
            </NavLink>
          </li>
              </>    
          }
          {/* shared all Menu */}
          <div className="divider"></div>
          <li>
            <NavLink className="border" to="/">
              <FaHouse />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="border" to="/dashBoard/menu">
            <BsList />
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink className="border" to="/dashBoard/shop">
            <FaBagShopping />
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink className="border" to="/dashBoard/contact">
            <FaMessage />
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashBoard;
