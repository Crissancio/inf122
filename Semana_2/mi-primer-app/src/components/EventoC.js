import React from "react";

function EventoC({image,title,dateLiteral,placeLiteral,description}){
    return(
        <div className="card-container">

            <img className="card-img"
                src={require(`../images/${image}.jpeg`)}
                alt="img-bruh" />
            
            <div className="card-content">
                <h2 className="card-title">{title}</h2>
                <p className="card-date">{dateLiteral}</p>
                <p className="card-place">{placeLiteral}</p>
                {description.map((line,index)=>(<p className="card-description">{line}</p>))}
            </div>
        </div>
    );
}

export default EventoC;