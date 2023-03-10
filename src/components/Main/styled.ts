import styled from 'styled-components'

export const Container = styled.main`
  height: 100%;
  width: 100%;
  padding: 3rem;

  color: var(--color);
  background-color: var(--bg-color);

  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Logo = styled.img`
  width: 25rem;
  margin-bottom: 2rem;
`

export const Title = styled.h1`
  font-size: 2.5rem;
`

export const Description = styled.h2`
  font-size: 2rem;
  font-weight: 400;
`

export const Illustration = styled.img`
  margin-top: 3rem;
  width: min(30rem, 100%);
`
