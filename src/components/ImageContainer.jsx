import React from 'react';
import {carDetails} from '../utils/consts'
import { addDetailAsync } from '../redux/actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { PicTheme } from './PicTheme.jsx';

const mapActionsToProps = (dispatch) => {
    return {
        addDetailAsync : bindActionCreators(addDetailAsync, dispatch)
    }
}
const mapStateToProps = (state) => {
    return {
        damagedDetails : state.damagedDetails
    };
}

const ImageContainer = (props) => {
    const selectDetail = (event) => {
        if (event.target.href) { 
            const carDetailName = carDetails[event.target.href.baseVal];
            props.addDetailAsync(carDetailName, event.target.href.baseVal);
        }
    }

    const getDetailColor = (id) => {
        if (props.damagedDetails.find(detail => detail.id === id)) {
            return '#F2C94C'
        } else {
            return '#7C7E8F'
        }
    }

    return (
        <PicTheme
            clickHandler={selectDetail}
            selectedDetails={props.damagedDetails}
            getColor={getDetailColor}
        />
    )
}

export default connect(mapStateToProps, mapActionsToProps)(ImageContainer);
