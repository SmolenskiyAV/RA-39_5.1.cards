/* eslint-disable jsx-a11y/anchor-is-valid */

// ### 
import "./card.css";

export default function Card(props) {  // функция отрисовки всего списка

    return (
        <div className="card">
            { props.children }

            <div className="card-body">
                <h3 className="card-title">Название карточки</h3>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button href="#"  className="btn">Go somewhere</button>
            </div>
        </div>
    );
};