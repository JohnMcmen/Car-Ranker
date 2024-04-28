import { Link } from 'react-router-dom';
import "./Card.css";
import { formatDistanceToNow } from 'date-fns';

const Card = ({ id, created_at, title, content, likes, image_url }) => {
    const timeAgo = formatDistanceToNow(new Date(created_at), { addSuffix: true });

    return (
        <div className="cards-container">
            <Link to={`/posts/${id}`} className="card-link">
                <p> {likes}</p>
                <h2 className="title">{title}</h2>
                <h3 className="created_at">Posted: {timeAgo}</h3>
                <p className="content">{content}</p>
                {image_url && <img className="image" src={image_url} alt="Post" />} {/* Render image if image_url exists */}
                
            </Link>
        </div>
    );
};

export default Card;
