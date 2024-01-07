import React, { useContext } from "react";
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

export function LoginForm(props) {

    const { switchToSignup } = useContext(AccountContext);

    return (
        <BoxContainer>
            <FormContainer>
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Password" />
            </FormContainer>
            <Marginer direction="vertical" margin={10} />
            <MutedLink href="#">Quên mật khẩu?</MutedLink>
            <Marginer direction="vertical" margin="1.6em" />
            <SubmitButton type="submit">Đăng ký</SubmitButton>
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