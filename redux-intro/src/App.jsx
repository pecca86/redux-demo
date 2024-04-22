import CreateCustomer from "./components/customer/CreateCustomer";
import Customer from "./components/customer/Customer";
import AccountOperations from "./features/accounts/AccountOperations";
import BalanceDisplay from "./components/account/BalanceDisplay";

function App() {
  return (
    <div className="App-container">
      <h1>Redux Intro</h1>
      <BalanceDisplay />
      <CreateCustomer />
      <Customer />
      <AccountOperations />
    </div>
  );
}

export default App;
