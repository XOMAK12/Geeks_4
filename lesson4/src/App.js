import './App.css';
import MainPage from './page/mainPage/MainPage';
import TodoPage from "./components/todoPage/TodoPage";

function App() {
    return (
        <div className='wrapper'>
            <TodoPage/>
            <MainPage/>
        </div>

    );
}


export default App;

