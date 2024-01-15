import React from "react";

function SocialNet(props){
    return(
        <figure>
            <a href= " { props.enlace }" >
                <img className="icon-social-network" 
                src={require(`../images/${props.icon1}.jpeg`)}alt="icon-social-1" />
            </a>
        </figure>
    );
}

export default SocialNet;