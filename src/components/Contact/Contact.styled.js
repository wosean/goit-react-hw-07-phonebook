import { styled } from 'styled-components';

export const ContactWrap = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 316px;
  height: 30px;
  gap: 5px;
  margin-right: auto;
  margin-right: auto;
  margin-bottom: 10px;
`;
export const ContactName = styled.p`
  width: 166px;
  height: 30px;
  font-size: 16px;
`;
export const ContactNumber = styled.p`
  width: 110px;
  font-size: 16px;
`;
export const BtnDelete = styled.button`
  display: inline-block;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;

  background-color: rgb(255, 255, 150);
  border: 2px rgb(255, 200, 150) solid;
  cursor: pointer;
  padding: 4px;
  .icon {
    width: 20px;
    height: 20px;
  }
  &:hover,
  &:focus {
  background-color: rgb(255, 0, 0);   
  }
`;