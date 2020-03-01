import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React, { useCallback } from 'react';

import {changeScale} from '../redux/actions'

import zoomPic from '../../assets/zoom.png'
import zoomOutPic from '../../assets/zoom-out.png'

const ScaleBlock = (props) => {
    const zoom = useCallback(
        () => {
           
            props.changeScale(props.scale + 10)
        },
        [props.scale, props.changeScale],
      );
    const zoomOut = useCallback(
        () => {
            if(props.scale > -220) {
                props.changeScale(props.scale - 10)
            }
        },
        [props.scale, props.changeScale],
      );
    return(
        <div className="zoom-block">
            <img onClick={zoom} className="zoom-block__icon" src={zoomPic}/>
            <img onClick={zoomOut} className="zoom-block__icon" src={zoomOutPic}/>
        </div>
    )
}
const mapActionsToProps = (dispatch) => {
    return {
        changeScale : bindActionCreators(changeScale, dispatch)
    }
}

const mapStateToProps = (state) => {
    return {
        scale : state.scale
    };
}


export default connect(mapStateToProps,mapActionsToProps)(ScaleBlock);