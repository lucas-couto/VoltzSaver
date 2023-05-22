import { Dispatch, SetStateAction, useEffect, useState } from 'react'

import { Container, Content, Title } from './styles'

interface IGameStart{
  setIsGameStarted: Dispatch<SetStateAction<boolean>> 
}

export function GameStart({ setIsGameStarted }: IGameStart) {

  const [seconds, setSeconds] = useState(3)

  useEffect(() => {
    if (seconds != 0) {
      setInterval(() => {
        setSeconds(seconds - 1)
      }, 1000)
    }
    if (seconds == 0) setIsGameStarted(true)

  }, [seconds])


  return (
    <Container>
      <Content>
        <Title>{seconds}</Title>
      </Content>
    </Container>
  )


}
