import React, { ReactNode, useEffect, useState } from 'react';

import * as S from './styles';

export type TabsProps = {
  activeTab?: string;
  children: ReactNode;
};

const Tabs = ({ children, activeTab }: TabsProps) => {
  const [tabHeader, setTabHeader] = useState<string[]>([]);
  const [childContent, setChildConent] = useState({});
  const [active, setActive] = useState(activeTab);

  useEffect(() => {
    const headers: string[] = [];
    const childCnt = {};
    React.Children.forEach(children, (element) => {
      if (!React.isValidElement(element)) return;
      const { name } = element.props;
      headers.push(name);
      childCnt[name] = element;
    });

    setTabHeader(headers);
    setChildConent({ ...childCnt });
  }, [children]);

  const changeTab = (name: string) => {
    setActive(name);
  };
  return (
    <S.Wrapper>
      <S.Header>
        {tabHeader.map((item) => (
          <S.HeaderItem
            active={item === active}
            key={item}
            onClick={() => changeTab(item)}
          >
            {/* <Typography
              variant="body-2"
              weight="bold"
              color={item === active ? 'secondary' : 'gray-1'}
            >
              {item}
            </Typography> */}
            <span>{item}</span>
          </S.HeaderItem>
        ))}
      </S.Header>
      {Object.keys(childContent).map(
        (key) => key === active && childContent[key]
      )}
    </S.Wrapper>
  );
};

export type TabPaneProps = {
  name: string;
  children: ReactNode;
};

export const TabPane = ({ children }: TabPaneProps) => (
  <S.TabPane>{children}</S.TabPane>
);

export default Tabs;
