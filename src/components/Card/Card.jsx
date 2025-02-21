
import './Card.scss'


function Card(props) {
    
				//здесь мы берем конкретные свойства, которые будут задаваться 
				//при вызове этого компонента
				const {name, universe, alterego, occupation, imgLink} = props;
        return (
            <div className="card">
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <img className="card-img" src={imgLink} alt={name}/>
                    <p className="card-text">Вселенная: {universe}</p>
                    <p className="card-text">Альтер эго: {alterego}</p>
                    <p className="card-text">Род деятельности: {occupation}</p>
                </div>
            
            </div>
        );
    
}

export default Card