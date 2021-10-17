import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

import CardUser from 'components/UserCard';

import { User } from 'types/user';
import api from 'services/api';
import { userMapper } from 'utils/mappers/userMapper';
import { useSearch } from 'context/searchContext';

import * as S from './styles';

const Home = () => {
  const [user, setUser] = useState<User | null>(null);
  const { query } = useSearch();
  const { push } = useHistory();

  const handleGetUser = async (userLogin: string) => {
    try {
      const resp = await api.getUser(userLogin);
      const serializedUser = userMapper(resp);
      setUser(serializedUser);
    } catch (error) {
      console.log(error);
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
      {/* <TextField icon={<Icon icon="search" />} onKeyUp={handleGetUser} /> */}
      <S.UserList>
        {user && <CardUser user={user} onRepoClick={handleRedirectUser} />}
      </S.UserList>
    </S.Wrapper>
  );
};

export default Home;
