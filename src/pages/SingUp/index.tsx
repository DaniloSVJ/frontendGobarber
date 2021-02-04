import React, { useCallback, useRef } from 'react';
import { FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi';
import type { FormHandles } from '@unform/core';

import { Form } from '@unform/web';
import * as Yup from 'yup';
import logoImg from '../../assets/logo.svg';
import { Container, Content, Background } from './styles';
import Input from '../../components/input';
import Button from '../../components/button';
import getValidationsErros from '../../utils/getValidationsErros';

const SignUp: React.FC = () => {
    const formRef = useRef<FormHandles>(null);

    const handleSubmit = useCallback(async (data: object) => {
        try {
            formRef.current?.setErrors({});
            const schema = Yup.object().shape({
                //  const schema = Yup.object().shape({

                name: Yup.string().required('Nome obrigatorio'),
                //        name: Yup.string().required('Nome obrigatório'),

                email: Yup.string()
                    .email('Digite um email válido')
                    // email: Yup.string()
                    .required('Email obrigatorio'),

                password: Yup.string().min(7, 'No mínimo 7 digitos'),
            });
            await schema.validate(data, {
                abortEarly: false,
            });
        } catch (err) {
            console.log(err);
            const errors = getValidationsErros(err);
            formRef.current?.setErrors(errors);
        }
    }, []);
    return (
        <Container>
            <Background />
            <Content>
                <img src={logoImg} alt="GoBarber" />
                <Form ref={formRef} onSubmit={handleSubmit}>
                    <h1>Faça seu Cadastro</h1>
                    <Input name="name" icon={FiUser} placeholder="Nome" />
                    <Input name="email" icon={FiMail} placeholder="E-mail" />

                    <Input
                        name="password"
                        icon={FiLock}
                        type="password"
                        placeholder="Senha"
                    />
                    <Button type="submit">Cadastrar</Button>
                </Form>
                <a href="forgot">
                    <FiArrowLeft />
                    Voltar para logon
                </a>
            </Content>
        </Container>
    );
};

export default SignUp;
