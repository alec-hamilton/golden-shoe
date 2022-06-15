import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Shoes from './Components/Shoes';
import Navbar from './Components/Navbar';

function App() {
    return (
        <>
        <Navbar />
        <div className="container-fluid px-sm-5">
            <Shoes />
        </div>
        </>
    );
}

export default App;
