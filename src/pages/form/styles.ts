import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`

export const Form = styled.form`
  width: 50%;
  height: 85vh;
  background-color: white;
  padding: 3rem;
  border-radius: 10px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.212);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 600px) {
    width: 100%;
    height: 100vh;
  }
`
export const Header = styled.div`
  width: 100%;
  margin-bottom: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  #title h1 {
    font-weight: bold;
    color: black;

    &::after {
      content: '';
      display: block;
      width: 5rem;
      height: 0.3rem;
      background-color: #6b63fff1;
      margin: 0 auto;
      position: absolute;
      border-radius: 0.5rem;
    }

    @media (max-width: 720px) {
      font-size: 1rem;
    }
  }

  #login_button {
    display: flex;
    align-items: center;
  }

  #login_button button {
    border: none;
    background-color: #6c63ff;
    padding: 0.4rem 1rem;
    border-radius: 5px;
    cursor: pointer;
    color: #fff;
    font-weight: bold;

    &:hover {
      background-color: #6b63fff1;
    }

    @media (max-width: 720px) {
      font-size: 1rem;
      padding: 0.4rem 0.5rem;
    }
  }
`

export const inputGrup = styled.div`
  width: 100%;
`

export const inputBox = styled.div`
  width: 100%;

  label {
    margin: 8px 0px;
    margin-left: 5px;
    display: block;
    font-weight: 600;
    font-size: 0.75rem;
    color: #000000c0;
  }

  input {
    width: 100%;
    height: 2rem;
    border-radius: 10px;
    padding: 1rem 1.2rem;
    border: transparent;
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

    &.input-error {
      border: 1px solid red;
    }
  }

  p {
    color: red;
    font-size: 10px;
    margin-left: 10px;
  }
`

export const Button = styled.button`
  margin-top: 1rem;
  border: none;
  background-color: #6c63ff;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;

  &:hover {
    background-color: #6b63fff1;
  }

  a {
    color: #fff;
  }
`
