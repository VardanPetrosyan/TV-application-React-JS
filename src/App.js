import LeftBar from './components/LeftBar'
import Pages from "./pages"

import './assets/css/App.css';



const App = () => {
    return (
        <>
            <main className="page-wrapper">
                <nav className='nav-bar'>
                    <LeftBar/>
                </nav>
                <section className='content'>
                    <Pages />
                </section>
            </main>
        </>
    );
}

export default App;
