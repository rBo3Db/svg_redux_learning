import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { carDetailsFills } from '../utils/consts';
import { addDetailAsync } from '../redux/actions';
import { PicTheme } from './PicTheme';

const ImageContainer = (props) => {
    const selectDetail = (event) => {
        if (event.target.href) { 
            const carDetailName = carDetailsFills[event.target.href.baseVal];
            if (carDetailName) {
                props.addDetailAsync(carDetailName, event.target.href.baseVal);
            }
        }
    }

    const getDetailColor = (id) => {
        if (props.damagedDetails.find(detail => detail.id === id) || props.pending.detailId === id) {
            return '#F2C94C'
        } else {
            return '#7C7E8F'
        }
    }

    return (
        <PicTheme
            clickHandler={selectDetail}
            getColor={getDetailColor}
            scale={props.scale}
        />
    )
}

const mapActionsToProps = (dispatch) => {
    return {
        addDetailAsync : bindActionCreators(addDetailAsync, dispatch)
    }
}
const mapStateToProps = (state) => {
    return {
        damagedDetails : state.damagedDetails,
        pending : state.pending,
        scale : state.scale
    };
}

export default connect(mapStateToProps, mapActionsToProps)(ImageContainer);
