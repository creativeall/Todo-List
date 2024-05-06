import React from "react";
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

// import App from './App';
import TodoList from './TodoList';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
  <TodoList />
</>)
