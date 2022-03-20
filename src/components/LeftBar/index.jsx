import { NavLink } from 'react-router-dom';
import NavButton from '../ui/NavButton';
import {PAGES} from '../../helpers/constants'
import './styel.css'

const LeftBar = () => {
    return (
        <div className='left-bar'>
            <div className='left-bar__left-bar-content left-bar-content'>
                <div className='left-bar-content__user-info user-info'>
                    <div className='user-info__avatar'>
                        <img src={require('../../assets/user.png')} alt="user-avatar" />
                    </div>
                    <span className='user-info__name'>
                        Daniel
                    </span>
                </div>
                <div>
                    {
                        PAGES.map(({id,title,icon,url}) =>
                            <NavLink
                                key={id} 
                                to={url}  
                                className={"nav-link"}
                                activeclassname="active"
                            >
                                <NavButton
                                    buttonSize = 'btn-medium'
                                >
                                    <img src={require(`../../assets/icons/${icon}`)} alt={title} />
                                    <span>{title}</span>
                                </NavButton>
                            </NavLink>
                        )
                    }
                 </div>
                 <div ></div>
                 <div className='nav-options'>
                    <span>Language</span>
                    <span>get help</span>
                    <span>exit</span>
                 </div>
            </div>
            <div className='bg-cover'></div>
        </div>
    );
}

export default LeftBar;
