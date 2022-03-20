import useImage from '../../hooks/useImage'
import Loader from '../Loader'
import './style.css';

const Card = ({data,...otherProps}) => {
    const {Title,CoverImage} = data
    const { loading, error, image } = useImage(CoverImage)

    return (
        <div className='movie-card' {...otherProps}>

        {loading ? (
            <Loader/>
        ) : (
            <img
                onLoad={(e)=>e.target.style.display='block'}
                src={image}
                alt={Title}
            />
        )}
        </div>
    );
}

export default Card;
