import './App.css';
import Container from './components/Container';
import {ThemeProvider} from './context/ThemeContext';
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <div className="App">
      <ThemeProvider value="dark">
        <UserProvider>
          <Container/>
        </UserProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
