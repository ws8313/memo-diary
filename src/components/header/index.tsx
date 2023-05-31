import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import { useState } from 'react';
import SideBar from '../sideBar';
import * as S from './styled';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSide = () => {
    setIsOpen(true);
  };

  return (
    <S.Wrapper>
      <S.Header>
        <S.Menu>
          <HamburgerMenuIcon
            className='icon'
            role='button'
            onClick={toggleSide}
          />
        </S.Menu>
        <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
      </S.Header>
    </S.Wrapper>
  );
};

export default Header;
