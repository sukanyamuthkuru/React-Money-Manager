import './index.css'

const MoneyDetails = props => {
  const {balance, incomes, expensess} = props
  return (
    <div className="money-details-container">
      <div className="card-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="money-details-image"
        />
        <div className="balance-container">
          <p className="Balance">Your Balance</p>
          <p className="money" data-testid="balanceAmount">
            Rs {balance}
          </p>
        </div>
      </div>
      <div className="card-container-1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="money-details-image"
        />
        <div className="balance-container">
          <p className="Balance">Your Income</p>
          <p className="money" data-testid="incomeAmount">
            Rs {incomes}
          </p>
        </div>
      </div>
      <div className="card-container-2">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="money-details-image"
        />
        <div className="balance-container">
          <p className="Balance">Your Expenses</p>
          <p className="money" data-testid="expensesAmount">
            Rs {expensess}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
