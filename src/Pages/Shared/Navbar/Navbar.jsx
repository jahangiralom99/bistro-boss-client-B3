import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { BsCartCheckFill } from "react-icons/bs";
import useCart from "../../../Hooks/useCart";


const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();

  const handleLogOut = async () => {
    const toastId = toast.loading("please wait...");
    try {
      logOut();
      toast.success("logged out successfully", { id: toastId });
    } catch (err) {
      console.log(err);
      toast.error(err.message, { id: toastId });
    }
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active text-white" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/menu"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active text-white" : ""
          }
        >
          Our Menu
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/order/dessert"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active text-white" : ""
          }
        >
          Our Order
        </NavLink>
      </li>
      <li>
        <NavLink to='/dashBoard/cart' className="border">
          <BsCartCheckFill></BsCartCheckFill>
          <div className="badge badge-secondary">{cart.length}</div>
        </NavLink>
      </li>
      <li>
        {user ? (
          <button onClick={handleLogOut} className="btn btn-ghost text-white">
            {" "}
            LogOut
            {user.email}
          </button>
        ) : (
          <NavLink
            to="/login"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active text-white" : ""
            }
          >
            Login
          </NavLink>
        )}
      </li>
    </>
  );
  return (
    <nav>
      <div className="navbar fixed z-10 bg-opacity-30 bg-black max-w-screen-xl text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-500 bg-opacity-40 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Bistro Boss</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
