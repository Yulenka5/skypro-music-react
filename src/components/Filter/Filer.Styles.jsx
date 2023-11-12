import styled from 'styled-components'

export const FilterButton = styled.button`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid #ffffff;
  border-radius: 60px;
  padding: 6px 20px;
  background: #181818;
  color: #ffffff;
  &:hover {
    color: #D9B6FF;
    border: 1px solid #D9B6FF;
  }
  &:active {
    color: #AD61FF;
    border: 1px solid #AD61FF;
  }
`
export const FilterContent = styled.ul`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 24px;
  flex-direction: column;
`

export const FilterText = styled.li`
  font-variant-numeric: lining-nums proportional-nums;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 120% */
  &:hover {
    border-color: #d9b6ff;
    color: #d9b6ff;
    cursor: pointer;
  }
  &:active {
    text-decoration-line: underline;
    color: #b672ff;
    border-color: #ad61ff;
    cursor: pointer;
  }
`
export const FilterBlock = styled.div`
  position: absolute;
  padding: 34px;
  border-radius: 12px;
  background: #313131;
  gap: 10px;
  display: flex;
  flex-direction: column;
  top: 29%;
  max-width: 220px;
  overflow: auto;
  height: 237px;
`
