import styled from 'styled-components'

export const HomeContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;

  main {
    margin-top: -85px;
    display: flex;
  }
`

export const Profile = styled.div`
  position: relative;
  display: flex;
  gap: 32px;
  margin: 0 auto;
  width: 864px;
  padding: 32px 40px;
  background: ${({ theme }) => theme['base-profile']};
  border-radius: 10px;
`

export const Avatar = styled.img`
  height: 148px;
  width: 148px;
  border-radius: 100px;
`

export const NameContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;

  a {
    font-size: 12px;
    font-weight: bold;
    line-height: 160%;
    text-transform: uppercase;
    color: ${({ theme }) => theme.blue};
    text-decoration: none;
    margin-right: 8px;
  }
`

export const Name = styled.p`
  font-family: 'Nunito', sans-serif;
  font-size: 1.5rem;
  color: ${({ theme }) => theme['base-title']};
  font-weight: bold;
  line-height: 160%;
`

export const Bio = styled.p`
  font-family: 'Nunito', sans-serif;
  font-size: 1rem;
  color: ${({ theme }) => theme['base-text']};
  font-weight: normal;
  line-height: 160%;
  margin-bottom: 24px;
`

export const Info = styled.div`
  display: flex;
  gap: 24px;

  div {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`

export const Text = styled.p`
  font-family: 'Nunito', sans-serif;
  font-size: 1rem;
  color: ${({ theme }) => theme['base-subtitle']};
  font-weight: normal;
  line-height: 160%;
`
