import { connect } from 'react-redux';
import React from 'react';
import { bindActionCreators } from 'redux';
import {cleanFailList} from '../redux/actions';
import Overlay from './Overlay';

const Popup = (props) => {
    const closed = props.failedAction.type ==="none" ? false : true;
    const closeWindow = () => {
        props.cleanFailList();
    }
    if (props.failedAction.type !== 'none') {
        return ( 
            <Overlay show={closed}>
                <div className="popup">
                    <h1>
                        Ошибка 
                    </h1>
                    при {props.failedAction.type === 'add' ? 'добавлении  детали: ' : 'удалении '}
                    <h2>
                        {props.failedAction.detailDame}
                    </h2>
                    пожалуйста, повторите попытку
                    <button onClick={closeWindow} className="popup__close">Закрыть</button>
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

export default connect(mapStateToProps, mapActionsToProps)(Popup);