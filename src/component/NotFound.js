import {Link} from 'react-router-dom';
const NotFound = () =>{
    return (
        <div className="not-found">
            <h2>Broken Link</h2>
            <p>The Page you requested not found</p>
            <Link to = '/'>Home</Link>
        </div>
    );
}

export default NotFound;