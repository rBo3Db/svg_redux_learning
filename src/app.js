import React from 'react';
import ReactDOM from 'react-dom';

import {Header} from './components/Header';
import PicTheme from './components/PicTheme';
import TextDescription from './components/TextDescription';
import NextStep from './components/NextStep';

import './styles/main.scss';

const Template = () => (
    <div>
        <Header />
        <main>
            <PicTheme/>
            <TextDescription/>
            <NextStep/>
        </main>
    </div>
);

ReactDOM.render(<Template />, document.getElementById('app'));