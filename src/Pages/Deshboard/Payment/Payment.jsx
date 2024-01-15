import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from "./CheckoutForm";

const Payment = () => {
    // TODO
    const stripePromise = loadStripe(import.meta.env.VITE_public_key)



  return (
    <section>
      <SectionTitle
        className="text-center mt-8"
        heading="---Please Pay to card!---"
        subHeading="Payment Method"
          ></SectionTitle>
          <div className="p-5">
              <Elements stripe={stripePromise}>
                  <CheckoutForm/>
              </Elements>
          </div>
    </section>
  );
};

export default Payment;
