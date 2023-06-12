import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const PaymentHistory = () => {
    const { user } = useAuth();
    const [paymentHistory, setPaymentHistory] = useState([]);
    const [axiosSecure] = useAxiosSecure();

    useEffect(() => {
        // Fetch payment history from the API
        axiosSecure
            .get(`/payment-history/${user.email}`)
            .then(response => {
                setPaymentHistory(response.data);
            })
            .catch(error => {
                console.error('Error fetching payment history:', error);
            });
    }, [axiosSecure, user.email]);

    return (
        <div className="lg:w-full">
            <Helmet>
                <title>Summer Camp || Payment History</title>
            </Helmet>
            <h2 className="text-center font-semibold text-2xl">My Payment History: {paymentHistory.length}</h2>
            <div className="overflow-x-auto lg:m-10">
                <table className="table w-full">
                    {/* Head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class Image</th>
                            <th>Class Name</th>
                            <th>Paid Amount</th>
                            <th>Payment Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paymentHistory.map((payment, index) => (
                            <tr key={payment._id}>
                                <td>{index + 1}</td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={payment.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>{payment.className}</td>
                                <td>${payment.price}</td>
                                <td>{payment.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;
