// Write your code here
import './index.css'

const TodoItem = props => {
  const {eachTodoItem, onDeleteItem} = props
  const {id, title} = eachTodoItem
  const onDelete = () => {
    onDeleteItem(id)
  }

  return (
    <li>
      <div className="item-conatainer">
        <p className="heading">{title}</p>
        <button type="button" onClick={onDelete}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
