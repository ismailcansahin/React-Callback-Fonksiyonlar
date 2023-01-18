import axios from "axios";

const getData = async (userId) => {
    const { data:users } = await axios(
        `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    const { data:post } = await axios (
        `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    )
    return {
        user: users,
        post: post
    };
}

export default getData;