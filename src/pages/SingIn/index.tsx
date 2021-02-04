import React, { useCallback, useRef } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import getValidationsErros from '../../utils/getValidationsErros';
import logoImg from '../../assets/logo.svg';
import { Container, Content, Background } from './styles';
import Input from '../../components/input';
import Button from '../../components/button';
import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';

interface SignInFormData {
    email: string;
    password: string;
}
const SignIn: React.FC = () => {
    const formRef = useRef<FormHandles>(null);
    const { signIn } = useAuth();
    const { addToast } = useToast();

    const handleSubmit = useCallback(
        async (data: SignInFormData) => {
            try {
                formRef.current?.setErrors({});

                const schema = Yup.object().shape({
                    email: Yup.string()
                        .email('Digite um e-mail válido')
                        .required('E-mail obrigatório'),
                    password: Yup.string().required('Senha obrigatória'),
                });
                await schema.validate(data, {
                    abortEarly: false,
                });

                await signIn({
                    email: data.email,
                    password: data.password,
                });
            } catch (err) {
                if (err instanceof Yup.ValidationError) {
                    const errors = getValidationsErros(err);
                    formRef.current?.setErrors(errors);
                }
                addToast();
            }
        },
        [signIn, addToast],
    );
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="GoBarber" />
                <Form ref={formRef} onSubmit={handleSubmit}>
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
                </Form>
                <a href="forgot">
                    <FiLogIn />
                    Criar Conta
                </a>
            </Content>
            <Background />
        </Container>
    );
};

export default SignIn;
