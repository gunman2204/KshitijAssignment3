
import './App.css';
import { useState } from 'react';
import AddExpenseForm from './components/AddExpenseForm';
import ExpenseList from './components/ExpenseList';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
// import Edit from './components/Edits';
import React from 'react'



function App() {
  const [expenses,setExpenses] = useState([]);

  const addExpense=(expense)=>{
    setExpenses([...expenses,expense]);
    console.log(expenses,expense)
  };

  const setNewExpenses=(b)=>{
    // let b=localStorage.getItem('content')
    setExpenses(b);
  }

  
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <ExpenseList expenses={expenses} setExpenses={setExpenses} />
    {/* <Edit/> */}
    <AddExpenseForm addExpense={addExpense}/>
    
    </>
  );
}

export default App;
