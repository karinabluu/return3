import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHippo, faStar } from '@fortawesome/free-solid-svg-icons';

function Buttons() {
  const lpButtonHandler = () => {
    alert('버튼을 만들어보세요');
  };
  const lnButtonHandler = () => {
    alert('어렵나요?');
  };

  return (
    <>
      <h2>Button</h2>
      <ButtonsSection>
        <FirstButton
          onClick={lpButtonHandler}
          back-color={'white'}
          border-color={'#55EFC4'}
        >
          <FontAwesomeIcon icon={faHippo} />
          &nbsp; Large Primary Button
        </FirstButton>

        <SecondButton back-color={'#55EFC4'} border-color={'#55EFC4'}>
          Medium
        </SecondButton>

        <ThirdButton back-color={'#55EFC4'} border-color={'#55EFC4'}>
          Small
        </ThirdButton>
      </ButtonsSection>

      <ButtonsSection>
        <FirstButton
          onClick={lnButtonHandler}
          back-color={'white'}
          border-color={'#FAB1A0'}
          color={'red'}
        >
          <FontAwesomeIcon icon={faStar} />
          &nbsp; Large Negative Button
        </FirstButton>

        <SecondButton
          back-color={'#FAB1A0'}
          border-color={'#FAB1A0'}
          color={'red'}
        >
          Medium
        </SecondButton>

        <ThirdButton
          back-color={'#FAB1A0'}
          border-color={'#FAB1A0'}
          color={'red'}
        >
          Small
        </ThirdButton>
      </ButtonsSection>
    </>
  );
}

const ButtonsSection = styled.section`
  margin: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;
const FirstButton = styled.button`
  width: 180px;
  height: 40px;
  background-color: white;
  font-weight: bold;
  border-radius: 10px;
  font-size: 11px;
  cursor: pointer;
  &:active {
    filter: brightness(80%);
  }
  color: ${(props) => props['color']};
  border: 3px solid ${(props) => props['border-color']};
  background-color: ${(props) => props['back-color']};
`;
const SecondButton = styled.button`
  width: 120px;
  height: 35px;
  border-radius: 10px;
  font-size: 11px;
  cursor: pointer;
  &:active {
    filter: brightness(80%);
  }
  color: ${(props) => props['color']};
  border: 3px solid ${(props) => props['border-color']};
  background-color: ${(props) => props['back-color']};
`;
const ThirdButton = styled.button`
  width: 90px;
  height: 30px;
  border-radius: 10px;
  font-size: 11px;
  cursor: pointer;
  &:active {
    filter: brightness(80%);
  }
  color: ${(props) => props['color']};
  border: 3px solid ${(props) => props['border-color']};
  background-color: ${(props) => props['back-color']};
`;
export { FirstButton, ThirdButton };
export default Buttons;
