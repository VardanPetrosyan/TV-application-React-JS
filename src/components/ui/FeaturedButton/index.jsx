import './style.css'

const SIZES = ['btn-large', 'btn-medium', 'btn-small'];

function FeaturedButton({ children, buttonSize = 'btn-medium', classSet=[], ...otherProps }) {
    return (
        <div className='featured-btn-box'>
            <button className={["featured-btn", buttonSize, ...classSet].join(" ")} {...otherProps}>
			    {children}
		    </button>
        </div>
    );
}

export default FeaturedButton;
