import { useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import ListItem from './componentes/ListItem'
import {
  Container,
  BlockTitleContainer,
  Text,
  DragableContainer,
} from './styles'

const elements = [
  { id: '1', content: 'one' },
  { id: '2', content: 'two' },
  { id: '3', content: 'three' },
  { id: '4', content: 'four' },
  { id: '5', content: 'five' },
  { id: '6', content: 'six' },
  { id: '7', content: 'seven' },
  { id: '8', content: 'eight' },
  { id: '9', content: 'nine' },
  { id: '10', content: 'ten' },
  { id: '11', content: 'eleven' },
  { id: '12', content: 'twelve' },
]

export function DragAndDropList() {
  const [items, setItems] = useState(elements)

  const onDragEnd = result => {
    const newItems = Array.from(items)
    const [removed] = newItems.splice(result.source.index, 1)
    newItems.splice(result.destination.index, 0, removed)
    setItems(newItems)
  }

  return (
    <Container>
      <BlockTitleContainer>
        <Text>Musical</Text>
      </BlockTitleContainer>
      <DragableContainer>
        {/* <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {provided => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {items.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <ListItem
                      provided={provided}
                      snapshot={snapshot}
                      item={item}
                    />
                  )}
                </Draggable>
              ))}
            </div>
          )}
        </Droppable>
      </DragDropContext> */}
      </DragableContainer>
    </Container>
  )
}
