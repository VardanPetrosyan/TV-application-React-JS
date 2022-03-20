import {useEffect,useCallback} from 'react'
import { useDispatch,useSelector } from 'react-redux'

import {setTrending,setFeatured} from '../../store/reducers/movieReducerDuck'

import MovieService from '../../services/MovieService'

import FeaturedVideo from '../../components/FeaturedVideo'
import Carousel from '../../components/Carousel'

import './style.css'

function getMovieFeatured(state) {
	return state.movie.trendingFeatured
}
function getMovieTrending(state) {
	return state.movie.trendingMovie
}
const Home = () => {
    const movieFeatured = useSelector(getMovieFeatured)
    const movieTrending = useSelector(getMovieTrending)

    const dispatcher = useDispatch()

    useEffect(() => {
        handleSetFeaturedData()
		handleSetTrendingData()
	}, [])

    const handleSetFeaturedData = useCallback(()=>{
        MovieService.getFeatured()
			.then(
				res => {
					dispatcher(setFeatured(res))
				},
				console.log
			)
    })
    const handleSetTrendingData = useCallback(()=>{
        MovieService.getTrendingNow()
			.then(
				res => {

                    let movieSesion = JSON.parse(sessionStorage.getItem('opendMovies'));
                    if(movieSesion && movieSesion.length>0){
                        res.forEach((el,index,arr)=>{
                            if(movieSesion.findIndex((item)=>el.Id === item.id) !== -1){
                                const element = arr.splice(index, 1)[0];
                                res.unshift(element);
                            }

                        })
                    }

                    console.log(res,'res')
					dispatcher(setTrending(res))
				},
				console.log
			)
    })
   

    return (
        <div className='home-page'>
            <section className='home-page__featured-video-box featured-video-box'>
                <FeaturedVideo  featuredData={movieFeatured}/>
            </section>
            <section className='home-page__slider-box featured-slider-box'>
                <Carousel trendingData={movieTrending} />
            </section>
        </div>
    );
}

export default Home;
