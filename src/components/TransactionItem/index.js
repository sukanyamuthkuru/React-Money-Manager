import './index.css'

const TranscationItem = props => {
  const {details, onDeleting} = props
  const {inputTitle, id, inputAmount, inputType} = details
  const onDelete = () => {
    console.log('aaa')
    onDeleting(id, inputTitle, inputAmount, inputType)
  }
  return (
    <li className="list-containerr">
      <p className="item">{inputTitle}</p>
      <p className="item">Rs {inputAmount}</p>
      <p className="item">{inputType}</p>
      <button
        type="button"
        className="buttondelete"
        onClick={onDelete}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt=" delete"
          className="delete"
        />
      </button>
    </li>
  )
}

export default TranscationItem
