import React, { useState } from 'react';

import Icon from 'components/Icon';
import TextField from 'components/TextField';
import CardUser from 'components/UserCard';

import { User } from 'types/user';
import api from 'services/api';
import { userMapper } from 'utils/mappers/userMapper';

import * as S from './styles';
import { useHistory } from 'react-router';

const Home = () => {
  const [user, setUser] = useState<User | null>(null);
  const { push } = useHistory();

  const handleGetUser = async (e) => {
    const { code, keyCode, currentTarget } = e ?? {};
    try {
      const valueTrim = currentTarget.value.replace(/( )/g, '');
      if ((code === 'Enter' || keyCode === 13) && valueTrim) {
        console.log(valueTrim);
        const resp = await api.getUser(valueTrim);
        const serializedUser = userMapper(resp);
        setUser(serializedUser);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleRedirectUser = (userLogin: string) => {
    if (userLogin) {
      push(`user/${userLogin}`);
    }
  };

  return (
    <S.Wrapper>
      <TextField icon={<Icon icon="search" />} onKeyUp={handleGetUser} />
      <S.UserList>
        {user && <CardUser user={user} onRepoClick={handleRedirectUser} />}
      </S.UserList>
    </S.Wrapper>
  );
};

export default Home;
