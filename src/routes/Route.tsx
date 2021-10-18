import React, { ElementType } from 'react';
import { Route, RouteProps, useHistory } from 'react-router-dom';

import Header from 'components/Header';
import { useSearch } from 'context/searchContext';

type RouteWrapperProps = RouteProps & {
  component: ElementType;
  isPrivate?: boolean;
};

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}: RouteWrapperProps) {
  const { push } = useHistory();
  const { setQuery } = useSearch();
  const handleChangeUser = (userLogin: string) => {
    setQuery(userLogin);
    push('/');
  };

  return (
    <>
      {isPrivate && <Header onInputUser={handleChangeUser} />}
      <Route {...rest} render={(props) => <Component {...props} />} />
    </>
  );
}
