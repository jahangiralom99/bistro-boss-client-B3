import toast from "react-hot-toast";
import useAxiosSe from "../../../Hooks/useAxiosSe";
import useCart from "../../../Hooks/useCart";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((total, current) => total + current.price, 0);
    const axios = useAxiosSe()

    const handleDelete =  (id) => {
        axios.delete(`/carts-delete/${id}`)
            .then(res => {
                if (res.data.deletedCount > 0) {
                    refetch();
                    toast.success("deleted Successfully")
                }
            // console.log(res.data);
        })
    }
    
  return (
    <div>
      <SectionTitle
        className="text-center mt-8"
        heading="---Hurry Up!---"
        subHeading="MANAGE ALL ITEMS"
      ></SectionTitle>
      <div className="md:flex justify-around">
        <h1 className="text-2xl font-bold">Total Items : {cart.length}</h1>
        <h1 className="text-2xl font-bold">Total Price : {totalPrice}</h1>
        {cart.length ?<Link to="/dashBoard/payment" className="btn btn-primary">Pay</Link> : <button disabled className="btn btn-primary">Pay</button>}
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>No</th>
                <th>Image</th>
                <th>Name</th>
                <th>Price </th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {cart.map((item, inx) => {
                const { image, name, _id, price } = item || {};
                return (
                  <tr key={_id}>
                    <th>{inx + 1}</th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="font-bold">{name} </div>
                    </td>
                    <td>{price} $</td>
                    <th>
                            <button
                                onClick={()=>handleDelete(_id)}
                                className="btn ">
                        <MdDelete className="text-2xl text-red-500" />
                      </button>
                    </th>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
