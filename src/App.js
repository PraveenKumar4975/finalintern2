import logo from './logo.svg';
import './App.css';
import { Navbarwithfilter } from './components/Navbarwithfilter';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Grid from './components/Grid';

function App() {
  return (
    <>
    <Provider store={store}>
              <Navbarwithfilter/>
              <Grid/>

    </Provider>
    
    </>
  );
}

export default App;
