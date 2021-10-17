import React from 'react';
import { Route, useHistory } from 'react-router-dom';

import Header from 'components/Header';
import { useSearch } from 'context/searchContext';

export default function RouteWrapper({ component: Component, ...rest }) {
  const { push } = useHistory();
  const { setQuery } = useSearch();
  const handleChangeUser = (userLogin: string) => {
    setQuery(userLogin);
    push('/');
  };

  return (
    <>
      <Header onInputUser={handleChangeUser} />
      <Route {...rest} render={(props) => <Component {...props} />} />
    </>
  );
}
