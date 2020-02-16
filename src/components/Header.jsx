import React from 'react';
import arrow from '../../assets/arrow.png'
import settings from '../../assets/settings.png'
export function Header() {
    return (
        <header className="header">
            <a><img src={arrow} className="header__icon"/></a>
            <section className="header-text">
                <h1 className="header-text__header">Повреждения</h1>
                <h2 className="header-text__participant">Участник "А" WV Polo</h2>
            </section>
            <a><img src={settings} className="header__icon"/></a>
        </header>
    );
}