import React from 'react';
import '../styleSheets/SocialNet.css'

function SocialNet({imageSocial, url, alternativo}){
    return(
        <figure className='social-network-figure'>
            <a href={url}>
                <img className='social-image' 
                    src={require(`../images/${imageSocial}.jpeg`)} 
                    alt={alternativo}/>
            </a>
        </figure>
    );
}
export default SocialNet;