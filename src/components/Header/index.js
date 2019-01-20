import React, { Component } from 'react';
import './style.css'

const Header = (props) => {
    const {title,subTitle,subTitleHiden} = props;
    return(
        <section className="Header">
            <h1 className="Home_Title">{title}</h1>
            <div className="Home__SubTitleWrapper">
            <h2 className="Home__SubTitle"> {subTitle}</h2>
            <h2 className="Home__HiddenSubTitle">{subTitleHiden}  </h2>
            </div>
        </section>
    );
};

export default Header;