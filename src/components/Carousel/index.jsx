import {useEffect, useState, useCallback} from 'react'
import { useDispatch } from 'react-redux';
import Slider from 'infinite-react-carousel';
import {setFeatured} from '../../store/reducers/movieReducerDuck'
import MovieService from '../../services/MovieService'
import Card from "../ui/Card"

import './style.css';

const initialDefault = {
	dots: false,
	adaptiveHeight: false,
	arrows: false,
	slidesToShow: getCount()
}

function getCount() {
	const docoumentWidth = document.body["clientWidth"]
	switch (true) {
		case docoumentWidth <= 532: return 3;
		case docoumentWidth <= 767: return 5;
		case docoumentWidth <= 991: return 7;
		default: return 8;
	}
}

const Carousel = ({trendingData=[]}) => {
	const [settings, setSettings] = useState(initialDefault)

	const dispatcher = useDispatch()
    useEffect(() => {
		window.addEventListener('resize', cardsCount)
		return () => {
			window.removeEventListener('resize', cardsCount)
		}
	}, []);

    const cardsCount = useCallback(() => {
		setSettings(prev => ({
			...prev,
			slidesToShow: getCount()
		}))
	}, [])

	const handleSetFeatured = (item)=>{
		MovieService.setFeatured(item)
			.then(
				res => {
					dispatcher(setFeatured(res))
				},
				console.log
			)
	}
	const handleSetMovieSession = (item)=>{
		let movieSesion = JSON.parse(sessionStorage.getItem('opendMovies'));
		if(!movieSesion){
			return sessionStorage.setItem('opendMovies', [JSON.stringify([{
				id:item.Id,
				date: new Date()
			}])]);
		}

		const repeatMovie = movieSesion.findIndex((el)=>el.id === item.Id)
		if(repeatMovie !== -1){
			movieSesion[repeatMovie].date = new Date()
		}else{
			movieSesion.push({
				id:item.Id,
				date: new Date()
			})
		}
		movieSesion = movieSesion.sort(function(a,b){
			return new Date(b.date) - new Date(a.date);
		  })

		sessionStorage.setItem('opendMovies', [JSON.stringify(movieSesion)]);
	}
    return (
        <div className="slider " >
			{
			trendingData.length>0
            ?<Slider {...settings} >
                {
                    trendingData.map(el =>
						<Card key={el.Id} data={el}  onClick={()=>{
							handleSetFeatured(el)
							handleSetMovieSession(el)
						}}/>
                    )
                }
            </Slider>
			:null
			}
        </div>
    );
}

export default Carousel;
