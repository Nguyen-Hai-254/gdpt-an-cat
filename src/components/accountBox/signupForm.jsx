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

export function SignupForm(props) {

    const { switchToSignin } = useContext(AccountContext);
    return (
        <BoxContainer>
            <FormContainer>
                <Input type="text" placeholder="Full name" />
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Password" />
                <Input type="password" placeholder="Confirm password" />
            </FormContainer>
            <Marginer direction="vertical" margin={10} />
            <SubmitButton type="submit">Đăng ký</SubmitButton>
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