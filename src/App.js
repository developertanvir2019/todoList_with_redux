import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import TodoList from './Components/TodoList';
import Footer from './Components/Footer';

function App() {
  return (
    <div
      class="grid place-items-center bg-blue-100 h-screen px-6 font-sans"
    >
      <Navbar />
      <div class="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">

        <Header />
        <hr class="mt-4" />


        <div
          class="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto"
        >
          <TodoList />


        </div>

        <hr class="mt-4" />

        <Footer />
      </div>
    </div>
  );
}

export default App;
