import Day from "./component/Day";
import DayList from "./component/DayList";
import Header from "./component/Header";
import CreatWord from "./component/CreateWord";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmptyPage from "./component/EmptyPage";
import CreateDay from "./component/CreateDay";

function App() {
  return (
    <BrowserRouter>
    <div className='App'>
    <Header />
      <button></button>
    
      <Routes>
        <Route path="/" element={<DayList/>} />
        <Route path="/day/:day" element={<Day/>} />
        <Route path="/createword" element={<CreatWord />}/>
        <Route path="/createday" element={<CreateDay />}/>
        <Route path="*" element={<EmptyPage />} />
        
      </Routes>
      
    </div>
    </BrowserRouter>
  );
}

export default App;