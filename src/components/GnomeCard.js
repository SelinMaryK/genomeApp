import React from 'react';
import '../css/gnomeCard.css';

const GnomeCard=(props) =>{
    const { gnomedata, style } = props;
    return(
        <div className='gnome-card-wrapper' style={style}>
        <div className='gnome-card' >
            
                <div className='gnome-card-column'>
                    <div className='gnome-card-image'>
                        <img src={gnomedata.thumbnail} alt={gnomedata.name}></img>
                    </div>
                </div>
                <div className='gnome-card-column'>
                    <span className='gnome-name'>{gnomedata.name}</span><br/>
                    <div>
                        <span className='gnome-details-label'>Age: {''}</span>
                        <span className='gnome-details'>{gnomedata.age} years</span>
                    </div>
                    <div>
                        <span className='gnome-details-label'>Height: {''}</span>
                        <span className='gnome-details'>{Math.round(gnomedata.height)} cm</span>
                    </div>
                    <div>
                        <span className='gnome-details-label'>Weight: {''}</span>
                        <span className='gnome-details'>{Math.round(gnomedata.weight)} Kg</span>
                    </div>
                    <div>
                        <span className='gnome-details-label'>Hair color: {''}</span>
                        <span className='gnome-details'>{gnomedata.hair_color}</span>
                    </div>
                    <div>
                        <span className='gnome-details-label'>Professions: {''}</span>
                        <span className='gnome-details'>{gnomedata.professions.join(", ")}</span>
                    </div>
                    <div>
                        <span className='gnome-details-label'>Friends: {''}</span>
                        <span className='gnome-details'>{gnomedata.friends.join(", ")}</span>
                    </div>
                </div>
            
            
        </div>
        </div>
    )
}

export default GnomeCard;