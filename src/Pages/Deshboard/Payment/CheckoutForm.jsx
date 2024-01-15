import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecret from "../../../Hooks/useAxiosSecret";
import useCart from "../../../Hooks/useCart";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";

const CheckoutForm = () => {
  const stripe = useStripe();
  const [clientSecret, setClientSecret] = useState("");
  const elements = useElements();
  const [error, setError] = useState("");
  const axios = useAxiosSecret();
  const [cart, refetch] = useCart();
  const { user } = useAuth();
  const [transation, setTransaction] = useState("");

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  useEffect(() => {
    if (totalPrice > 0) {
      axios.post("/create-payment-intent", { price: totalPrice }).then((res) => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
   }
  }, [axios, totalPrice]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTransaction("");

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("error card", error);
      setError(error.message);
    } else {
      setError("");
      console.log("success card", paymentMethod);
    }

    //   confirm payment method
    const { paymentIntent, error: confirmErr } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "",
            name: user?.displayName,
          },
        },
      });
    if (confirmErr) {
      // console.log("error", confirmErr);
    } else {
      if (paymentIntent.status === "succeeded") {
        setTransaction(paymentIntent.id);

        // now save Payment in the Database;
        const payment = {
          email: user.email,
          price: totalPrice,
          date: new Date(),  //utc date converted use moment js
          cardIds: cart.map(item => item._id),
          menuItemIds: cart.map(item => item.menuId),
          transaction: paymentIntent.id,
          status : "pending"
        };
        const res = await axios.post('/payments', payment);
        console.log(res.data);
        if (res.data?.paymentResult.insertedId) {
          Swal.fire({
            position: "top",
            icon: "success",
            title: "your payment was successfully",
            showConfirmButton: false,
            timer: 1500
          });
          refetch();
        }
        // refetch();
      }
      // console.log("success", paymentIntent);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-sm btn-primary mt-5"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
        <p
          className="
              text-red-500"
        >
          {error}
        </p>
        {transation && <p className="text-green-500">Transaction Id : {transation}</p>}
      </form>
    </div>
  );
};

export default CheckoutForm;
