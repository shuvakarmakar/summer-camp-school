import { useQuery } from '@tanstack/react-query'
import useAuth from './useAuth';
const useCart = () => {
    const { user } = useAuth();
    const { refetch, data: classes = [] } = useQuery({
        queryKey: ['classes', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/classes?email=${user?.email}`)
            return res.json();
        },

    })

    return [classes, refetch]

}
export default useCart;


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