import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {cleanFailList} from '../redux/actions';
import Overlay from './Overlay';

const Popup = (props) => {
    console.log(props.failedAction)
    console.log(props.failedAction.type)
    console.log(props.failedAction.type ==="none" ? false : true)

    const closed = props.failedAction.type ==="none" ? false : true;
    const closeWindow = () => {
        console.log (props.failedAction)
        props.cleanFailList();
    }
    if (props.failedAction.type !== 'none') {
        return ( 
            // show={props.failedAction.type ==="none" ? false : true}
            <Overlay show={closed}>
                <div className="popup">
                    <h2>
                        Ошибка
                        {props.failedAction.type}
                        {props.failedAction.detailDame}
                    </h2>
                    <button onClick={closeWindow}>Закрыть</button>
                </div>
            </Overlay>
        )
    } else {
        return(<div></div>);
    }
}
const mapActionsToProps = (dispatch) => {
    return {
        cleanFailList : bindActionCreators(cleanFailList, dispatch)
    }
}
const mapStateToProps = (state) => {
    return {
        failedAction : state.failedAction
    };
}
// const mapActionsToProps = (dispatch) => {
//     return {
//         removeDetailAsync : bindActionCreators(removeDetailAsync, dispatch)
//     }
// }

export default connect(mapStateToProps, mapActionsToProps)(Popup);
//isShown={!!props.apiStatus}