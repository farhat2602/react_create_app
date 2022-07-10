import { Routes, Route } from 'react-router-dom';
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import Error404Page from "./pages/Error404Page";




function App() {
  return (
      <Routes>
          <Route path='/' element={<Layout />}>
              <Route index element={<HomePage />} />

              {/*<Route path='signin' element={<SignIn />} />*/}
              {/*<Route path='signup' element={<SignUp />} />*/}

              <Route path='*' element={<Error404Page />} />
          </Route>
      </Routes>
  );
}

export default App;
