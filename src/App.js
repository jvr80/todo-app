import Navbar from './components/Navbar'
import Form from './components/Form'
import ListGroup from './components/ListGroup'
import { GlobalProvider } from './context/GlobalContext';



function App() {
  return (
    <GlobalProvider>
      <Navbar />
      <div className="container p-5">
      <Form/>
      <ListGroup/>
      </div>
    </GlobalProvider>
  );
}

export default App;
