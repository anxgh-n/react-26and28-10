import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import ButtonClick from "./components/Button1/ButtonClick"
import Counter from "./components/Button1/Counter"
import Person from "./components/Button2/Person"
import EcomAdd from "./components/Ecom/EcomAdd"
import EcomAddValidation from "./components/Ecom/EcomAddValidation"
import EcomList from "./components/Ecom/EcomList"
import ErrorComp from "./components/ErrorComp"
import InputDemo from "./components/TextDemo/InputDemo"
import ToDoList from "./components/TOdoList/ToDoList"

import { BrowserRouter, Route, Routes } from "react-router-dom"
import HeaderApp from "./HeaderApp"
  
  function App() {
  
  return (
    <>
    <p>26&28&29/10/24</p>
      
      
        {/* <ButtonClick></ButtonClick> */}
        {/* <Counter></Counter> */}
        {/* <Person></Person> */}
        {/* <InputDemo></InputDemo>*/}
        <EcomList></EcomList>
        {/* <EcomAdd></EcomAdd> */}
        {/* <EcomAddValidation></EcomAddValidation> */}
        {/* <ToDoList></ToDoList> */}
      
      {/* <BrowserRouter>
      <HeaderApp></HeaderApp>
        <Routes>
          <Route path='/' element={<Counter/>}></Route>
          <Route path='/todo' element={<ToDoList/>}></Route>
          <Route path='/ecom-list' element={<EcomList/>}></Route>
          <Route path='/*' element={<ErrorComp/>}></Route>
          
        </Routes>
      </BrowserRouter> */}
    </>
  )
}

export default App
