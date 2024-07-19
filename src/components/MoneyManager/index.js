import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    lists: [],
    inputTitle: '',
    inputAmount: '',
    inputType: transactionTypeOptions[0].displayText,
    balance: 0,
    incomes: 0,
    expensess: 0,
  }

  onChangeinputTitle = event => {
    this.setState({inputTitle: event.target.value})
  }

  onChangeinputAmount = event => {
    this.setState({inputAmount: event.target.value})
  }

  onChageInputType = event => {
    let a
    if (event.target.value === 'INCOME') {
      a = 'Income'
    } else {
      a = 'Expenses'
    }
    this.setState({inputType: a})
  }

  onDeleting = (id, inputTitle, inputAmount, inputType) => {
    let {balance, incomes, expensess} = this.state
    const {lists} = this.state
    if (inputType.toUpperCase() === 'INCOME') {
      balance = parseInt(balance) - parseInt(inputAmount)
      incomes = parseInt(incomes) - parseInt(inputAmount)
    } else {
      expensess = parseInt(expensess) - parseInt(inputAmount)
      balance = parseInt(balance) + parseInt(inputAmount)
    }
    const filteredList = lists.filter(each => {
      if (each.id !== id) {
        return each
      }
      return ''
    })
    this.setState({balance, incomes, expensess, lists: filteredList})
  }

  onClickAddButton = event => {
    event.preventDefault()
    const {inputAmount, inputTitle, inputType} = this.state
    let {balance, incomes, expensess} = this.state

    const newItem = {
      id: uuidv4(),
      inputTitle,
      inputAmount,
      inputType,
    }

    if (inputType.toUpperCase() === 'INCOME') {
      balance = parseInt(balance) + parseInt(inputAmount)
      incomes = parseInt(incomes) + parseInt(inputAmount)
    } else {
      expensess = parseInt(expensess) + parseInt(inputAmount)
      balance = parseInt(incomes) - parseInt(expensess)
    }

    this.setState(preState => ({
      lists: [...preState.lists, newItem],
      inputTitle: '',
      inputAmount: '',
      balance,
      incomes,
      expensess,
    }))
  }

  render() {
    const {
      lists,
      inputTitle,
      inputAmount,
      balance,
      incomes,
      expensess,
    } = this.state

    return (
      <div className="app-container">
        <div className="profile-container">
          <h1 className="name">Hi, Richard</h1>
          <p className="name-description">
            Welcome back to your
            <span className="span-style">Money Manager</span>
          </p>
        </div>
        <MoneyDetails
          balance={balance}
          incomes={incomes}
          expensess={expensess}
        />
        <div className="form-and-history-container">
          <form className="form-container" onSubmit={this.onClickAddButton}>
            <h1 className="add-trac-heading">Add Transaction</h1>
            <div className="title-container">
              <label className="label" htmlFor="title">
                TITLE
              </label>
              <input
                value={inputTitle}
                id="title"
                placeholder="TITLE"
                className="input"
                onChange={this.onChangeinputTitle}
              />
            </div>
            <div className="title-container">
              <label className="label" htmlFor="AMOUNT">
                AMOUNT
              </label>
              <input
                value={inputAmount}
                id="AMOUNT"
                placeholder="AMOUNT"
                className="input"
                onChange={this.onChangeinputAmount}
              />
            </div>
            <div className="title-container">
              <label className="label" htmlFor="type">
                TYPE
              </label>
              <select className="input" onChange={this.onChageInputType}>
                <option
                  value={transactionTypeOptions[0].optionId}
                  className="label"
                >
                  {transactionTypeOptions[0].displayText}
                </option>
                <option
                  value={transactionTypeOptions[1].optionId}
                  className="label"
                >
                  {transactionTypeOptions[1].displayText}
                </option>
              </select>
            </div>
            <div className="button-container">
              <button
                className="button-add"
                type="submit"
                onClick={this.onClickAddButton}
              >
                Add
              </button>
            </div>
          </form>
          <div className="history-container">
            <h1 className="add-trac-heading">History</h1>

            <ul className="list-container">
              <li className="bar-container">
                <p className="bar-items">Title</p>
                <p className="bar-items">Amount</p>
                <p className="bar-items">Type</p>
              </li>
              {lists.map(each => (
                <TransactionItem
                  key={each.id}
                  details={each}
                  onDeleting={this.onDeleting}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
