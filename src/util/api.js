const BASE_URL = "https://reqres.in/api/users?delay=3"
export const getUsers = async () => {
    try {
        const response = await fetch(BASE_URL);
        const users = await response.json();
        return users.data;
    } catch (error) {
        console.error(error);
    }
};


