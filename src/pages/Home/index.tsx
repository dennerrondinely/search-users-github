import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

import CardUser from 'components/UserCard';
import Message from 'components/Message';

import { useSearch } from 'context/searchContext';
import { userMapper } from 'utils/mappers/userMapper';
import api from 'services/api';

import { User } from 'types/user';

import * as S from './styles';
import { ErrorMessage } from 'types/error';
import Loading from 'components/Loading';

const Home = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { query } = useSearch();
  const { push } = useHistory();

  const handleGetUser = async (userLogin: string) => {
    try {
      setLoading(true);
      setError(false);
      setUser(null);
      const resp = await api.getUser(userLogin);
      if (resp.message && resp.message === ErrorMessage.NOT_FOUND) {
        setError(true);
      } else {
        const serializedUser = userMapper(resp);
        setUser(serializedUser);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  const handleRedirectUser = (userLogin: string) => {
    if (userLogin) {
      push(`user/${userLogin}`);
    }
  };

  useEffect(() => {
    if (query) {
      handleGetUser(query);
    }
  }, [query]);

  return (
    <S.Wrapper>
      {loading && (
        <S.LoadingWrapper>
          <Loading loading={loading} size={60} />
        </S.LoadingWrapper>
      )}
      {!loading && error && (
        <Message title="Desculpe, nenhum resultado encontrado :(">
          <p>O Usuário que você pesquisou</p>
          <p>infelizmente não foi encontrado ou não existe.</p>
        </Message>
      )}
      {!loading && !error && !user && (
        <Message title="Vamos começar?">
          <p>Digite o nome de um usuário e</p>
          <p>em seguida pressione enter!</p>
        </Message>
      )}
      {!loading && !error && user && (
        <CardUser user={user} onRepoClick={handleRedirectUser} />
      )}
    </S.Wrapper>
  );
};

export default Home;
