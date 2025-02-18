import React from "react";
import './Card.css'


function Card(props) {
    
				//здесь мы берем конкретные свойства, которые будут задаваться 
				//при вызове этого компонента
				const {title, price, description, alterego, work, imgLink} = props;
        return (
            <div className="card">
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <img className="card-img" src={imgLink} alt={title}/>
                    <p className="card-text">Вселенная: {description}</p>
                    <p className="card-text">Альтер эго: {alterego}</p>
                    <p className="card-text">Род деятельности: {work}</p>
                </div>
            
            </div>
        );
    
}

export default Card