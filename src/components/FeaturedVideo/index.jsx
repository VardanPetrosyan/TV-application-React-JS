import FeaturedButton from '../ui/FeaturedButton';
import useImage from '../hooks/useImage'
import Loader from '../ui/Loader'
import playICON from '../../assets/icons/ICON-play.svg'
import './style.css';

const getDuration = (sec=0)=>{
    let result = new Date(sec * 1000).toISOString()
    .slice(11, 16)
    .split(':')
    result = `${+result[0]}h ${+result[1]}m`
    return result
}
const FeaturedVideo = ({featuredData}) => {
    const {Title,Category,ReleaseYear,MpaRating,Duration,Description,CoverImage} = featuredData

    const { loading, error, image } = useImage(CoverImage)
    // if (error) return <Loader/>
    const show = {
        display:'block'
    }
    return (
        <div className='featured' >
            <div className='featured__cover'>
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
            <div className='featured__featured-content featured-content'>
                <div className='featured-content__title'>
                    <span>{Category}</span>
                    <h1>{Title}</h1>
                </div>
                <div className='featured-content__date'>
                    <span>{ReleaseYear}</span>
                    <span>{MpaRating}</span> 
                    <span>{getDuration(Duration)}</span>
                </div>
                <div className='featured-content__description'>
                    <span>{Description}</span>
                </div>
                <div className='featured-content__btns'>
                    <FeaturedButton
                        classSet = {['play']}
                    >
                        <img src={playICON} alt="play" />
                        Play
                    </FeaturedButton>
                    <FeaturedButton
                        classSet = {['more-info']}
                    >
                        More Info
                    </FeaturedButton>
                </div>
            </div>
        </div>
    );
}

export default FeaturedVideo;
