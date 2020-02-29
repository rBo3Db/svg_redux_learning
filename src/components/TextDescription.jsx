import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { removeDetailAsync } from '../redux/actions';
import { DetailsListItem } from './DetailsListItem';


const mapActionsToProps = (dispatch) => {
    return {
        removeDetailAsync : bindActionCreators(removeDetailAsync, dispatch)
    }
}

const mapStateToProps = (state) => {
    return {
        damagedDetails : state.damagedDetails
    };
}

const TextDescription = (props) => {

    console.log(props.damagedDetails);
    const removeDetailFromList = (carDetailName) => {
        props.removeDetailAsync(carDetailName);
    };

    return(
        <div>
            {props.damagedDetails.map(element => 
                <DetailsListItem element={element} removeDetailFromList={removeDetailFromList} key={element.id}/>
            )}
        </div>
    );
}

export default connect(mapStateToProps, mapActionsToProps)(TextDescription)


