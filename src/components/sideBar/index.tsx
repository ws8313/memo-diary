import { Cross1Icon } from '@radix-ui/react-icons';
import { useRef, useEffect } from 'react';
import {
  SideBarWrap,
  Menu,
  Wrapper,
  SideBarContainer,
  SideBarOutside,
  SideBarList,
} from './styled';

const SideBar = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: any;
}) => {
  const outside = useRef<any>();

  useEffect(() => {
    document.addEventListener('mousedown', handlerOutsie);
    return () => {
      document.removeEventListener('mousedown', handlerOutsie);
    };
  });

  const handlerOutsie = (e: any) => {
    if (!outside.current.contains(e.target)) {
      toggleSide();
    }
  };

  const toggleSide = () => {
    setIsOpen(false);
  };

  return (
    <Wrapper className={isOpen ? 'open' : ''}>
      <SideBarOutside className={isOpen ? 'open' : ''} />
      <SideBarContainer>
        {/* <SideBarOutside /> */}
        <SideBarWrap
          id='sidebar'
          ref={outside}
          // isVisible={isOpen}
          // className={isOpen ? 'open' : ''}
        >
          <SideBarList className={isOpen ? 'open' : ''}>
            <Cross1Icon onClick={toggleSide} onKeyDown={toggleSide} />
            <Menu>메뉴1</Menu>
            <Menu>메뉴2</Menu>
            <Menu>메뉴3</Menu>
          </SideBarList>
        </SideBarWrap>
      </SideBarContainer>
    </Wrapper>
  );
};

export default SideBar;
