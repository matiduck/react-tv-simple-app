import styled from '@emotion/styled'

export const Root = styled.span<{ value: number }>`
  display: inline-block;
  min-width: 20px;
  height: 20px;
  border-radius: ${({ value }) => value}px;
  background: var(--red, #d94227);
  transform: rotate(${({ value }) => value}deg);
  color: #fff;
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  strong {
    text-decoration: underline;
  }
`

export const BigRoot = styled(Root)`
  height: 30px;
  min-width: 30px;
  line-height: 30px;
`
