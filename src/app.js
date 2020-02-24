import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {reducer} from './redux/root-reducer';

import {Header} from './components/Header';
import TextDescription from './components/TextDescription';
import NextStep from './components/NextStep';
import ImageContainer from './components/ImageContainer';

import './styles/main.scss';

import zoom from '../assets/zoom.png'
import zoomOut from '../assets/zoom-out.png'

const store = createStore(reducer, applyMiddleware(thunk));

const Template = () => (
    <Provider store={store}>
        <Header />
        <main className="main-conteiner">
            <section className="pic-block">
                <ImageContainer />
                <div className="zoom-block">
                    <img className="zoom-block__icon" src={zoom}/>
                    <img className="zoom-block__icon" src={zoomOut}/>
                </div>
            </section>
            <TextDescription/>
            <NextStep/>
        </main>
    </Provider>
);

ReactDOM.render(<Template />, document.getElementById('app'));