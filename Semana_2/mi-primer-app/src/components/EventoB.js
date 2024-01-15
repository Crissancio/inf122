import React from "react";
import "../styleSheets/EventoB.css";

function EventoB(props) {
    return(
        <div className="card-container">

            <img className="card-img"
                src={require(`../images/${props.image}.jpeg`)}
                alt="img-bruh" />
            
            <div className="card-content">
                <h2 className="card-title">{props.title}</h2>
                <p className="card-date">{props.dateLiteral}</p>
                <p className="card-place">{props.placeLiteral}</p>
                <p className="card-description">{props.description}</p>
                <div className="container-social-network">
                    <figure>
                        <img className="icon-social-network" 
                            src={require(`../images/${props.icon1}.jpeg`)}alt="icon-social-1" />
                    </figure>
                    <figure>
                        <img className="icon-social-network" 
                            src={require(`../images/${props.icon2}.jpeg`)}
                            alt="icon-social-2"/>
                    </figure>
                    <figure>
                        <img className="icon-social-network" 
                            src={require(`../images/${props.icon3}.jpeg`)}
                            alt="icon-social-3"/>
                    </figure>
                </div>
            </div>
        </div>
    );
}

//agregar un socialNet
//componente funcional

export default EventoB;