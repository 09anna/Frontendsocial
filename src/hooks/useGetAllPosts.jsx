import axios from "axios";
import { useEffect } from "react";
import { setPosts } from "../redux/postSlice";
import { useDispatch } from "react-redux";

const useGetAllPosts = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchAllPost = async () => {
            try {
                const res = await axios.get('http://localhost:8000/api/v1/post/all', { withCredentials: true });
                if (res.data.success) {
                    //console.log(res.data);
                    console.log(res.data.posts);
                    
                    dispatch(setPosts(res.data.posts));

                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchAllPost();
    }, []);
}
export default useGetAllPosts;