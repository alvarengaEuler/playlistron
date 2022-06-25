import Marquee from 'react-fast-marquee'
import { Container, TimeLine, ScrollingText } from './styles'

// eslint-disable-next-line no-undef
const Player: React.FC = () => {
  return (
    <>
      <Container>
        <TimeLine />
        <ScrollingText>
          <Marquee gradientColor={[19, 17, 27]} style={{ color: '#666668' }}>
            I can be a React component, multiple React components, or just some
            text.
          </Marquee>
        </ScrollingText>
      </Container>
    </>
  )
}

export default Player
