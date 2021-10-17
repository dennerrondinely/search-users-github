import React, { KeyboardEventHandler, useState } from 'react';

import Icon from 'components/Icon';
import TextField from 'components/TextField';

import * as S from './styles';

export type HeaderProps = {
  onInputUser?: (userLogin: string) => void;
};

const Header = ({ onInputUser }: HeaderProps) => {
  const [text, setText] = useState('');
  const handleInputUser: KeyboardEventHandler<HTMLInputElement> = (event) => {
    const { code, currentTarget } = event;
    const { value } = currentTarget;
    const valueTrim = value.replace(/( )/g, '');

    if (code === 'Enter' && valueTrim && onInputUser) {
      setText('');
      onInputUser(valueTrim);
    }
  };
  return (
    <S.Wrapper>
      <TextField
        value={text}
        onInputChange={setText}
        icon={<Icon icon="search" />}
        onKeyUp={handleInputUser}
      />
    </S.Wrapper>
  );
};

export default Header;
