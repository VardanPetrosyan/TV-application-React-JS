import './style.css'

const SIZES = ['btn-large', 'btn-medium', 'btn-small'];

function NavButton({ children, buttonSize = 'btn-medium', classSet=[], ...otherProps }) {
    return (
        <div className='nav-btn-box'>
            <button className={["nav-btn", buttonSize, ...classSet].join(" ")} {...otherProps}>
			    {children}
		    </button>
        </div>
    );
}

export default NavButton;
