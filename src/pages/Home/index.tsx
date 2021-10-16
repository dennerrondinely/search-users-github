import React, { useEffect } from 'react';
import Heading from 'components/Heading';
import api from 'services/api';

import * as S from './styles';
import { userMapper } from 'utils/mappers/userMapper';

const Home = () => {
  useEffect(() => {
    const callApi = async () => {
      const user = await api.getUser('dennerrondinely');
      console.log(userMapper(user));
    };
    callApi();
  }, []);
  return (
    <S.Wrapper>
      <Heading>teste</Heading>
    </S.Wrapper>
  );
};

export default Home;
