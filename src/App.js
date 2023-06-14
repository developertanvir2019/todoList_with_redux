import './App.css';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import TodoList from './Components/TodoList';
import Footer from './Components/Footer';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div
        className="grid place-items-center bg-blue-100 h-screen px-6 font-sans"
      >
        <Navbar />
        <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">

          <Header />
          <hr className="mt-4" />


          <div
            className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto"
          >
            <TodoList />


          </div>

          <hr className="mt-4" />

          <Footer />
        </div>
      </div>
    </Provider>
  );
}

export default App;
