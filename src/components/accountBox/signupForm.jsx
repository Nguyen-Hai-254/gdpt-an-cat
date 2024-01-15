import React, { useContext, useState } from "react";
import {
    BoldLink,
    BoxContainer,
    FormContainer,
    Input,
    LineText,
    SubmitButton,
} from "./common";
import { Marginer } from "../marginner";
import { AccountContext } from './accountContext';
import { signup } from "../../api/userApi";
import { Typography } from "@mui/material";
import { object, ref, string } from "yup";
import { toast } from "react-toastify";

export function SignupForm(props) {
    const { switchToSignin } = useContext(AccountContext);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    let signupSchema = object({
        name: string().required('Họ và tên không được để trống'),
        email: string().required('Email không được để trống').email('Email không đúng định dạng'),
        password: string().required('Mật khẩu không được để trống'),
        confirmPassword: string().required('Xác nhận mật khẩu không được để trống')
            .oneOf([ref('password'), null], 'Mật khẩu và xác nhận mật khẩu không khớp với nhau')
    })

    const handleSignup = async () => {
        try {
            await signupSchema.validate({ name, email, password, confirmPassword });
            const res = await signup(email, password, confirmPassword, name);
            if (res.statusCode === 200) {
                toast.success(res.message)
            }

            switchToSignin();
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
                <Input type="text" placeholder="Full name" value={name} onChange={(e) => setName(e.target.value)} />
                <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <Input type="password" placeholder="Mật khẩu" value={password} onChange={(e) => setPassword(e.target.value)} />
                <Input type="password" placeholder="Xác nhận mật khẩu" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                <Typography color={"red"} variant="h6">{error}</Typography>
            </FormContainer>
            <Marginer direction="vertical" margin={10} />
            <SubmitButton type="submit" onClick={() => handleSignup()}>Đăng ký</SubmitButton>
            <Marginer direction="vertical" margin="5px" />
            <LineText>
                Bạn đã có tài khoản?{" "}
                <BoldLink onClick={switchToSignin} href="#">
                    Đăng nhập
                </BoldLink>
            </LineText>
        </BoxContainer>
    );
}