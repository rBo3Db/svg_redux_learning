import React from 'react';
import deleteIcon from '../../assets/delete.png';

export const DetailsListItem = ({element, removeDetailFromList}) => {
    const onRemoveClick = () => {
        removeDetailFromList(element);
    }
    console.log(element);
    return (
        <div className="description-line" key={element.id}>
            {element.name}
            <img 
                className="description-line__delete"
                key={element.id}
                src={deleteIcon}
                onClick={onRemoveClick}
            />
        </div>
    )
}