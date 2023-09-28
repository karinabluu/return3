import React, { useState } from 'react';
import { ThirdButton } from './Buttons';
import styled from 'styled-components';

function Input() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const onNameChange = (e) => {
    setName(e.target.value);
  };

  // Price Input
  const onPriceChange = (e) => {
    const newPrice = e.target.value.replace(/\D/g, '');
    if (newPrice === '') {
      setPrice('');
    } else {
      setPrice(parseInt(newPrice).toLocaleString());
    }
  };

  const sumButtonHandler = () => {
    if (name.length === 0 && price.length === 0) {
      return alert(`이름과 가격 모두 입력해주세요.`);
    }
    alert(`name : ${name}, price : ${String(price).replaceAll(',', '')}`);
    setName('');
  };

  return (
    <>
      <h2>Input</h2>
      <InputBoxWrap>
        이름 : <MainInput onChange={onNameChange} value={name} />
        &nbsp; 가격 :{' '}
        <MainInput onChange={onPriceChange} value={price} placeholder="0" />
        &nbsp;
        <ThirdButton
          onClick={sumButtonHandler}
          back-color={'#55EFC4'}
          border-color={'#55EFC4'}
        >
          저장
        </ThirdButton>
      </InputBoxWrap>
    </>
  );
}
const InputBoxWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const MainInput = styled.input`
  height: 30px;
  border: 1px solid black;
  border-radius: 8px;
`;

export default Input;
