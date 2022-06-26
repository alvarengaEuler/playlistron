import { LoremIpsum } from 'lorem-ipsum'
import { generateFromString } from 'generate-avatar'
import { useMemo } from 'react'
import styled, { css } from 'styled-components'

const Avatar = styled.img`
  height: 16px;
  width: 16px;
  border-radius: 50%;
`

const CardHeader = styled.div`
  font-weight: 500;
  text-align: start;
  /* border: 1px solid #f90; */
`

const Author = styled.div`
  display: flex;
  align-items: center;
`

const CardFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border: 1px solid red; */
`

const DragItem = styled.div`
  padding: 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  background: ${props => props.theme.backgrounds.dark};
  border-top-color: ${props => props.theme.colors.grey};
  border-top-width: 1px;
  border-top-style: solid;
  flex-direction: column;
  width: 100%;
  height: 60px;
`

const lorem = new LoremIpsum()

const ListItem = ({ item, provided, snapshot }) => {
  const randomHeader = useMemo(() => lorem.generateWords(5), [])

  return (
    <DragItem
      ref={provided.innerRef}
      snapshot={snapshot}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
    >
      <CardHeader>{randomHeader}</CardHeader>
      <span>{item.id}</span>
      <CardFooter>
        <span>{item.content}</span>
        <Author>
          {item.id}
          <Avatar
            src={`data:image/svg+xml;utf8,${generateFromString(item.id)}`}
          />
        </Author>
      </CardFooter>
    </DragItem>
  )
}

export default ListItem
