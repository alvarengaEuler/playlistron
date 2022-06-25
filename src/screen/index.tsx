import { Greetings } from '../components/Greetings'
import Player from '../components/Player'

import { Container, Content, CurrentConnection } from './styles'

const screen = () => {
  return (
    <Container>
      <Content>
        {/* <ConnectionsList /> */}
        <CurrentConnection>
          {/* <KeyList /> */}
          {/* <KeyContent /> */}
        </CurrentConnection>
      </Content>
      <Player />
    </Container>
  )
}

export default screen
