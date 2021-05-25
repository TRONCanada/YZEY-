import styled from 'styled-components'

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 992px;
  padding-left: 16px;
  padding-right: 16px;
  background-image: url('./images/pattern_med_03_med_08.png') !important;

  ${({ theme }) => theme.mediaQueries.sm} {
    padding-left: 24px;
    padding-right: 24px;
  }
`

export default Container
