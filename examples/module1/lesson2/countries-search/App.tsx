import './App.css';
import CountriesSearchContainer from './containers/CountriesSearchContainer';

const App = () => {
  return (
    <main
      style={{ width: '100%' }}
      className="container mx-auto py-4 w-full h-full"
    >
      <CountriesSearchContainer />
    </main>
  );
};

export default App;
