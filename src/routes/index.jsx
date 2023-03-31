import { Login } from '../pages/Login/Login';
import { Register } from '../pages/Register/Register';
import { Dashboard } from '../pages/Dashboard/Dashboard';
import { Routes, Route } from 'react-router-dom';
import { ProtectedRoutes } from '../pages/ProtectedRoutes/ProtectedRoutes';
import { TechProvider } from '../providers/TechContext/TechContext';

export const AppRoutes = () => {

  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/register' element={<Register />} />

      <Route path='/checkUser' element={<ProtectedRoutes />}>
        <Route index element={<TechProvider> <Dashboard /> </TechProvider>} />
      </Route>


    </Routes>
  )
}