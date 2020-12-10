import React from 'react';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import { Container, Content, Background } from './styles';

import Input from '../../components/input';
import Button from '../../components/button';

const SingUp: React.FC = () => (
    <Container>
        <Content>
            <img src={logoImg} alt="GoBarber" />
            <form action="">
                <h1>Faça seu Cadastro</h1>
                <Input name="name" icon={FiUser} placeholder="Nome" />
                <Input name="email" icon={FiMail} placeholder="E-mail" />
                <Input
                    name="password"
                    icon={FiLock}
                    placeholder="Senha"
                    type="password"
                />
                <Button type="submit">Cadastrar</Button>
            </form>
            <a href="forgot">
                <FiArrowLeft />
                Voltar para logon
            </a>
        </Content>
        <Background />
    </Container>
);

export default SingUp;
