import styled from 'styled-components';

interface DividerProps {
  margin?: string;
}

interface PriceContainerProps {
  margin?: string;
}

export const WhiteBackgorund = styled.div`
  background-color: ${({ theme }) => theme.main.colors.white};
  height: 500px;
  display: flex;
  /* justify-content: space-between; */
  flex-direction: column;
  padding: 16px 8px;
  border-radius: 4px;
  margin-top: -56px;
  box-shadow: 0px 4px 20px -9px rgba(0, 0, 0, 0.15);
  padding: 20px 16px;
`;

export const Divider = styled.div<DividerProps>`
  border: 1px solid ${({ theme }) => theme.main.colors.gray02};
  margin: ${(props) => props.margin || '0px'};
`;

export const BankDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`;

export const PriceContainer = styled.div<PriceContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: fit-content;
  margin: ${(props) => props.margin || '0px'};
`;

export const PricesContainer = styled.div`
  display: flex;
  margin-top: 16px;
`;
