import React from 'react';
import deleteIcon from '../../assets/delete.png';

const TextDescriotion = () => {
    return(
        <div className="descriotion-line">
            Левое Переднее Крыло 
            <img className="descriotion-line__delete" src={deleteIcon}/>
        </div>
    );
}

export default TextDescriotion;