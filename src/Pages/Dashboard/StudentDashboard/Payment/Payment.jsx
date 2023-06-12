import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import CheckOutForm from "./CheckOutForm";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
    const classData = useLoaderData();
    console.log(classData);

    // Access class data properties
    const { price, instructorName } = classData;

    return (
        <div className="w-full">
            <Helmet>
                <title>Summer Camp || Payment</title>
            </Helmet>
            <h2 className="text-center mb-10 divider text-2xl">Payment Page</h2>
            <Elements stripe={stripePromise}>
                <CheckOutForm classData={classData} price={price} instructorName={instructorName} />
            </Elements>
        </div>
    );
};

export default Payment;
