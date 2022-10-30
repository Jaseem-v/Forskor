import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import BottomFooterNavigation from './components/bottomNavigation/BottomFootarNavigation'
import Navbar from './components/Navbar/Navbar'
import './index.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import BottomDetailsTab from './components/BottomDetails/BottomDetailsTab'
import { Provider } from 'react-redux'
import store from "./redux/store";
import { BrowserRouter } from 'react-router-dom'



const theme = createTheme({
  palette: {
    primary: {
      main: '#205E54;'
    }
  }
});

// const bottom = useSelector((state) => state.productReducer)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>

        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>

    </Provider>
  </React.StrictMode>
)
