
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { NavBar } from "./components/NavBar/NavBar";


function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={"¡Bienvenidos!"}></ItemListContainer>
    </div>
  );
}

export default App;
