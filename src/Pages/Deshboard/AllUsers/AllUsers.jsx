import { useQuery } from "react-query";
import useAxiosSe from "../../../Hooks/useAxiosSe";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaUsersLine } from "react-icons/fa6";
import { FaRegTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axios = useAxiosSe();

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["allUsers", axios],
    queryFn: async () => {
      const res = await axios.get("/users", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access-token')}`
        }
      });
      return res;
    },
  });

  const handleDelete = (id) => {
    // console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to Deleted this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`/users/${id}`).then((res) => {
          // console.log(res.data.deletedCount);
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  const handleAdminBtn = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to admin!",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes,Admin now!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.patch(`/users/admin/${item._id}`).then((res) => {
          if (res.data.modifiedCount > 0) {
            refetch()
            Swal.fire({
              title: "Admin!",
              text: `${item.name} is an Admin Now!`,
              icon: "success",
            });
          }
        });
      }
    });
  };

  if (isLoading) {
    return <p>loading.......</p>;
  }

  // console.log(data);

  return (
    <div className="p-5">
      <div>
        <SectionTitle
          className="text-center mt-8"
          heading="---How many!---"
          subHeading="MANAGE ALL USERS"
        ></SectionTitle>
        <h1 className="text-4xl font-bold">Total users: {data.data.length}</h1>
      </div>
      <div className="mt-6">
        <div className="overflow-x-auto w-full">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="border bg-[#D1A054] text-white rounded-sm">
                <th>No</th>
                <th>Name</th>
                <th>Email</th>
                <th>ROLE</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}

              {data?.data.map((item, idx) => {
                const { name, email, _id } = item || {};
                return (
                  <tr key={_id}>
                    <th>{idx + 1}</th>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>
                      {item.role === "Admin" ? <h1 className="text-green-500">{item.role}</h1>:<button
                        onClick={() => handleAdminBtn(item)}
                        className="btn btn-sm"
                      >
                        {" "}
                        <FaUsersLine className="text-2xl " />
                      </button>}
                    </td>
                    <td>
                      <button
                        onClick={() => handleDelete(_id)}
                        className="btn btn-sm bg-red-500"
                      >
                        <FaRegTrashAlt className="text-xl text-white" />
                      </button>
                    </td>
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

export default AllUsers;
