import Header from './common/header.js';
import Footer from './common/footer.js';
import Search from './components/home/homesearch.js';
import './App.css';

function App() {
  return (
        <div className="container">
            <Header/>
            <Search/>
            <Footer/>
        </div>
  );
}

export default App;
