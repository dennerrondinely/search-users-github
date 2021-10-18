import React, { KeyboardEventHandler, useState } from 'react';

import Icon from 'components/Icon';
import TextField from 'components/TextField';

import * as S from './styles';

export type HeaderProps = {
  onInputUser?: (userLogin: string) => void;
};

//TODO: Encontrar alternativa para keyCode

const Header = ({ onInputUser }: HeaderProps) => {
  const [text, setText] = useState('');
  const handleInputUser: KeyboardEventHandler<HTMLInputElement> = (event) => {
    const { code, currentTarget, keyCode } = event;
    const { value } = currentTarget;
    const valueTrim = value.replace(/( )/g, '');

    console.log(event);

    if ((code === 'Enter' || keyCode === 13) && valueTrim && onInputUser) {
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
