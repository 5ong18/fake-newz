import React from 'react';
import { Link } from 'react-router-dom';

import shuffleArray from '../../functions';

const showLatest = ({latest}) => {
    if (latest) {
        return shuffleArray(latest).map((item) => {
            return (
                <Link to={`/news/${item.id}`} key={item.id} className="item">
                    <div className="image_cover" style={{background: `url(/assets/img/articles/${item.img})`}}>
                        <div className="description">
                            <span>{item.category}</span>
                            <div>{item.title}</div>
                        </div>
                    </div>
                </Link>
            )
        })
    }
}

const LatestNews = (props) => {
    console.log(props);
    return (
        <div className="home-latest">
            {showLatest(props)}
        </div>
    )
}

export default LatestNews;