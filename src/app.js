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
import Popup from './components/Popup';
import ScaleBlock from './components/ScaleBlock';

import './styles/main.scss';

const store = createStore(reducer, applyMiddleware(thunk));

const Template = () => (
    <Provider store={store}>
        <Header />
        <Popup />
        <main className="main-conteiner">
            <section className="pic-block">
                <ImageContainer />
                <ScaleBlock />
            </section>
            <TextDescription/>
            <NextStep/>
        </main>
    </Provider>
);

ReactDOM.render(<Template />, document.getElementById('app'));