import './menu-item.css';
import {withRouter} from 'react-router-dom';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
    let height;
    if(size === "large") {
        height = "md:h-80 h-60"
    }else {
        height = "h-60"
    }
    return (
        <div 
            onClick={() => history.push(`${match.url}${linkUrl}`)}
            className={`${height} menu my-2 min-w-1/3 flex-auto flex justify-center items-center border border-black ml-2 mr-4 first:mr-2 last:ml-2 overflow-hidden`}
        >
            <div  
                className="w-full h-full bg-center bg-cover custom"
                style={{backgroundImage: `url(${imageUrl})`}}
            />
            <div className="h-24 absolute px-6 flex flex-col justify-center items-center border border-black bg-white content opacity-70">
                <h1 className="font-bold text-xl mb-1.5 text-gray-600 uppercase">{title}</h1>
                <span className="font-extralight text-base uppercase">Shop Now</span>
            </div>
        </div>
    )
}

export default withRouter(MenuItem);