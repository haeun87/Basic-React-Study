import Menu from './components/Menu';
import data from './data/recipes';

function App() {
  return (
    <div className="App">
      <Menu recipes={data} />
    </div>
  );
}

export default App;
