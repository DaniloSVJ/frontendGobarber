import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import { Container, Content, Background } from './styles';

import Input from '../../components/input';
import Button from '../../components/button';

const SignIn: React.FC = () => (
    <Container>
        <Content>
            <img src={logoImg} alt="GoBarber" />
            <form action="">
                <h1>Faça seu logon</h1>
                <Input name="email" icon={FiMail} placeholder="E-mail" />
                <Input
                    name="password"
                    icon={FiLock}
                    placeholder="Senha"
                    type="password"
                />
                <Button type="submit">Entrar</Button>
                <a href="forgot">Esqueci minha senha</a>
            </form>
            <a href="forgot">
                <FiLogIn />
                Criar Conta
            </a>
        </Content>
        <Background />
    </Container>
);

export default SignIn;
