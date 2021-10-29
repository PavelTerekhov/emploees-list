import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

function App() {
  const data = [
    {name: "Ivan", surname: "Ivanov", salary: 1800, increase: false, id: 1},
    {name: "Oleg", surname: "Sidorov", salary: 900, increase: true, id: 2},
    {name: "Maksim", surname: "Petrov", salary: 3000, increase: false, id: 3}
  ]
  return (
    <div className="app">
        <AppInfo />

        <div className="search-panel">
            <SearchPanel/>
            <AppFilter/>
        </div>
        
        <EmployeesList data={data}/>
        <EmployeesAddForm/>
    </div>
  );
}

export default App;
