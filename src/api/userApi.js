import axios from "axios";

const port = process.env.PORT_BE || 3002;
const domain = `http://localhost:${port}`;

export const signup = async (email, password, confirmPassword, name) => {
    const res = await axios({
        method: "post",
        url: `${domain}/signup`,
        data: {
            email: email,
            password: password,
            confirmPassword: confirmPassword,
            name: name
        }
    })

    return res.data;
}
