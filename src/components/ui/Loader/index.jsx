import LoaderSVG from './loader.svg'
import './style.css'

const Loader = () => {
    return (
        <div className='loader'>
            <img width="100px" src={LoaderSVG} alt="loader" />
        </div>
    );
}

export default Loader;
