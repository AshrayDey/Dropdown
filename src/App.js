import './App.css';
import {Dropdown} from './DropdownComp/dropdown';

function App() {
  const optionArray=["OPTION 1" , "OPTION 2" , "OPTION 3"]
  return (
    <div className="App">
        <Dropdown array={optionArray} />
    </div>
  );
}

export default App;
