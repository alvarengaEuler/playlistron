import { DragAndDropList } from '../components/DragableVerticalList'
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
      <DragAndDropList />
      <Player />
    </Container>
  )
}

export default screen
