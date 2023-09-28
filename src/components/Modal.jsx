import React, { useState } from 'react';
import { FirstButton, ThirdButton } from './Buttons';
import styled from 'styled-components';

function Modal() {
  const [firmodal, setFirModal] = useState(false);
  const [secmodal, setSecModal] = useState(false);

  const SmallToggleModal = () => {
    setFirModal(!firmodal);
  };

  const LargeToggleModal = () => {
    setSecModal(!secmodal);
  };

  return (
    <>
      <h2>Modal</h2>
      <ButtonWrap>
        <ThirdButton
          back-color={'#55EFC4'}
          border-color={'#55EFC4'}
          onClick={SmallToggleModal}
        >
          open modal
        </ThirdButton>

        <FirstButton
          back-color={'#white'}
          border-color={'#FAB1A0'}
          color={'red'}
          onClick={LargeToggleModal}
        >
          open modal
        </FirstButton>
      </ButtonWrap>
      {firmodal && (
        <>
          <OutsideArea></OutsideArea>
          <SmallModalWrap>
            <p>
              닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지
              않아요.
            </p>
            <SmallBtnWrap>
              <ThirdButton
                back-color={'#FAB1A0'}
                border-color={'#FAB1A0'}
                onClick={SmallToggleModal}
              >
                닫기
              </ThirdButton>
              <ThirdButton back-color={'#55EFC4'} border-color={'#55EFC4'}>
                확인
              </ThirdButton>
            </SmallBtnWrap>
          </SmallModalWrap>
        </>
      )}
      {secmodal && (
        <>
          <OutsideArea onClick={LargeToggleModal}></OutsideArea>
          <LargeModalWrap>
            <LargeModalBtn onClick={LargeToggleModal}>X</LargeModalBtn>
            <p>
              닫기 버튼 1개가 있고, <br />
              외부 영역을 누르면 모달이 닫혀요.
            </p>
          </LargeModalWrap>
        </>
      )}
    </>
  );
}

const ButtonWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  align-items: center;
`;

const OutsideArea = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
  z-index: 5;
`;

const SmallModalWrap = styled.div`
  width: 450px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  padding: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 6;
  background-color: white;
  border-radius: 8px;
`;

const SmallBtnWrap = styled.div`
  display: flex;
  gap: 10px;
`;
const LargeModalWrap = styled.div`
  width: 250px;
  height: 200px;
  padding: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 6;
  background-color: white;
  border-radius: 8px;
`;

const LargeModalBtn = styled.button`
  position: absolute;
  right: 10px;
`;

export default Modal;
