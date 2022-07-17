import './App.css';
import ButtonComponent from './components/Button';
import Header from './components/Header'
import TableList from './components/TableList';
import SendIcon from '@mui/icons-material/Send';
import {  IconButton, TextField } from '@mui/material';
import IconButtonComponent from './components/IconButtonComponent';

function App() {
  return (
    <div>
      <div><Header /></div> 
      <div><TableList/></div>
       <div><TextField label = 'Nome' size='small' variant = 'outlined' color = 'primary'
        helperText = '' type = 'text'/></div>
       
       <IconButtonComponent Icon = {SendIcon} color = 'primary'>Send</IconButtonComponent>
    </div>
  );
}

export default App;