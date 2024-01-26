import React, { useContext, useState } from "react";
import {
    BoldLink,
    BoxContainer,
    FormContainer,
    Input,
    LineText,
    MutedLink,
    SubmitButton,
} from "./common";
import { Marginer } from "../marginner";
import { AccountContext } from './accountContext';
import { Typography } from "@mui/material";
import { login } from "../../api/userApi";
import { useDispatch } from "react-redux";
import { setAccessToken } from "../../redux/reducers/authSlice";
import { useLocation, useNavigate } from "react-router-dom";

export function LoginForm(props) {
    const { switchToSignup } = useContext(AccountContext);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const location = useLocation();
    const redirectTo = location.search.replace('?redirectTo=', '')

    const handleLogin = async () => {
        try {
            const res = await login(email, password);
            dispatch(setAccessToken(res.data));

            if (res.data.userData && res.data.userData.role === "Admin") {
                navigate(redirectTo === '' ? '/admin' : redirectTo);
            }
            else {
                navigate(redirectTo === '' || redirectTo.includes('/admin') ? '/' : redirectTo);
            }

        } catch (e) {
            if (e.response && e.response.status) {
                setError(e.response.data)
            }
            else {
                setError(e.message)
            }
        }
    }

    return (
        <BoxContainer>
            <FormContainer>
                <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <Input type="password" placeholder="Mật khẩu" value={password} onChange={(e) => setPassword(e.target.value)} />
                <Typography color={"red"} variant="h6">{error}</Typography>
            </FormContainer>
            <Marginer direction="vertical" margin={10} />
            <MutedLink href="#">Quên mật khẩu?</MutedLink>
            <Marginer direction="vertical" margin="1.6em" />
            <SubmitButton type="submit" onClick={() => handleLogin()}>Đăng nhập</SubmitButton>
            <Marginer direction="vertical" margin="5px" />
            <LineText>
                Chưa có tài khoản?{" "}
                <BoldLink onClick={switchToSignup} href="#">
                    Đăng ký
                </BoldLink>
            </LineText>
        </BoxContainer>
    );
}