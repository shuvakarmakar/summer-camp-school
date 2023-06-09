import { useQuery } from '@tanstack/react-query'
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
const useClasses = () => {
    const { user } = useAuth();
    // const token = localStorage.getItem('access-token');
    const [axiosSecure] = useAxiosSecure();

    const { refetch, data: classes = [] } = useQuery({
        queryKey: ['classes', user?.email],
        queryFn: async () => {
            const res = await axiosSecure(`/selectclass?email=${user?.email}`);
            console.log('res from axios', res);
            return res.data;
        },

    })

    return [classes, refetch]

}
export default useClasses;


// 
// const { user } = useAuth();
//     const { refetch, data: classes = [] } = useQuery({
//         queryKey: ['classes', user?.email],
//         queryFn: async () => {
//             const res = await fetch(`http://localhost:5000/classes?email=${user?.email}`)
//             return res.json();
//         },

//     })

//     return [classes, refetch]