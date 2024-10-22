import styled from 'styled-components'

export const Feed = styled.div`
  width: 100%;
  max-height: 50vh;
  margin-bottom: 10px;
  background-color: white;
  padding: 0.5rem;
  border-radius: 10px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.212);

  p {
    color: black;
    width: 100%;
  }

  #title {
    font-weight: bold;
    font-size: 1.1rem;
  }

  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  div #icon {
    width: 100%;
    margin-bottom: 0.5rem;
  }
`

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 0px 0.5rem;

  p {
    word-wrap: break-word;
  }
`
