import {Routes,Route,BrowserRouter,useNavigate} from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard  from './pages/Dashboard';
import SendMoney from './pages/SendMoney';
import HomePage from './pages/HomePage';

function App() {
  return (
    <>      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/send' element={<SendMoney/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
