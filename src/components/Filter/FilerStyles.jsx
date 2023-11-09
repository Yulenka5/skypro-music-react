import styled from "styled-components";

export const FilterButton = styled.button`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
border: 1px solid #ffffff;
border-radius: 60px;
padding: 6px 20px;

&:not(:last-child) {
    margin-right: 10px;
  }
`
export const FilterText = styled.ul`
display: flex;
justify-content: center;
align-items: flex-start;
gap: 24px;
flex-direction: column;
`
