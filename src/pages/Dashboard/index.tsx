import React, { FormEvent, useState, useEffect } from 'react';
// import { Fi } from 'react-icons/fi';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Title, Form, Repositories, Error } from './styles';
import api from '../../services/api';

const urlimg =
    'https://xesque.rocketseat.dev/platform/1587379765556-attachment.svg';
interface Repository {
    full_name: string;
    description: string;
    owner: {
        login: string;
        avatar_url: string;
    };
}
const Dashboard: React.FC = () => {
    const [newRepo, setNewRepo] = useState('');

    const [inputError, setInputError] = useState('');
    const [repositories, setRepositories] = useState<Repository[]>(() => {
        const storagedRepositories = localStorage.getItem(
            '@GithubExplorer:repositories',
        );
        if (storagedRepositories) {
            return JSON.parse(storagedRepositories);
        }
        return [];
    });
    useEffect(() => {
        localStorage.setItem(
            '@GithubExplorer:repositories',
            JSON.stringify(repositories),
        );
    }, [repositories]);

    async function handleAddRepository(
        event: FormEvent<HTMLFormElement>,
    ): Promise<void> {
        event.preventDefault();
        if (!newRepo) {
            setInputError('Digite o nome do Repositorio');
            return;
        }
        try {
            const response = await api.get(`repos/${newRepo}`);

            const repository = response.data;
            setRepositories([...repositories, repository]);
            setNewRepo('');
            setInputError('');
        } catch (error) {
            setInputError('Erro na busca por esse repositorio');
        }
    }
    return (
        <>
            <img src={urlimg} alt="github explrer" />
            <Title>Explore Repositorio do GitHub</Title>
            <Form hasError={!!inputError} onSubmit={handleAddRepository}>
                <input
                    value={newRepo}
                    onChange={e => setNewRepo(e.target.value)}
                    placeholder="Digite o nome do repositorio"
                />
                <button type="submit">Pesquisar</button>
            </Form>
            {inputError && <Error>{inputError}</Error>}
            <Repositories>
                {repositories.map(repository => (
                    <Link
                        key={repository.full_name}
                        to={`/repositories/${repository.full_name}`}
                    >
                        <img
                            src={repository.owner.avatar_url}
                            alt={repository.owner.login}
                        />
                        <div>
                            <strong>{repository.full_name}</strong>
                            <p>{repository.description}</p>
                        </div>
                        <FiChevronRight size={20} />
                    </Link>
                ))}
            </Repositories>
        </>
    );
};

export default Dashboard;
