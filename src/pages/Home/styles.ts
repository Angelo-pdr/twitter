import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`

export const Flex = styled.div`
  width: 100%;
  display: flex;
  aling-items: center;
`
export const Header = styled.div`
  width: 15%;
  height: 100vh;
  background-color: transparent;
  padding: 0.5rem 1rem;
`
export const ContainerFeed = styled.div`
  width: 50%;
  margin: 10px auto;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  #feedList {
    width: 100%;
    height: 100%;
  }
`

export const Feed = styled.div`
  width: 100%;
  max-height: 30vh;
  margin-bottom: 10px;
  background-color: white;
  padding: 0.5rem;
  border-radius: 10px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.212);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  div #icon {
    width: 5%;
    display: flex;
    aling-items: center;
  }
`

export const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  li {
    display: flex;
    align-items: center;
    padding: 0.5rem 0px;
  }

  a {
    margin-left: 5px;
    font-size: 1.2rem;
    font-weight: bold;
    color: white;
  }
`

export const Input = styled.input`
  width: 100%;
  height: 2rem;
  border-radius: 10px;
  padding: 1rem 1.2rem;
  border: none;
  box-shadow: 1px 1px 1px 2px #0000001c;

  &::placeholder {
    color: #000000be;
  }

  &:hover {
    background-color: #eeeeee75;
  }

  &:focus-visible {
    outline: 1px solid #6c63ff;
  }
`

export const Button = styled.button`
  width: 100%;
  border: none;
  background-color: #6c63ff;
  padding: 0.4rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  color: #fff;
  font-weight: bold;
  margin-top: 0.5rem;

  &:hover {
    background-color: #6b63fff1;
  }

  @media (max-width: 800px) {
    font-size: 1.2rem;
    padding: 0.4rem 0.5rem;
  }
`
