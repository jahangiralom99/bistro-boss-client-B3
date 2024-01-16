import { useQuery } from "react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecret from "../../../Hooks/useAxiosSecret";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axios = useAxiosSecret();

  const { data: payments, isLoading } = useQuery({
    queryKey: ["payments", user?.email],
    queryFn: async () => {
      const res = await axios.get(`/payments/${user?.email}`);
      return res.data;
    },
  });

  if (isLoading) {
    return <p>Loading ..........</p>;
  }

  console.log(payments);

  return (
    <section className="p-5">
      <SectionTitle
        heading="---All payment History here!---"
        subHeading="Payments ALl"
      ></SectionTitle>
      <div className="overflow-x-auto w-full">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="font-bold">#</th>
              <th className="font-bold">Price $</th>
              <th className="font-bold">Transaction Id</th>
              <th className="font-bold">Status</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, idx) => (
              <tr key={payment._id}>
                <th>{idx + 1}</th>
                <td>{payment.price} $</td>
                <td>{payment.transaction}</td>
                <td>{payment.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default PaymentHistory;
