import React, { Component } from 'react';
import { Link } from "react-router-dom";

export class Nav extends Component {

    render() {
        return (
            <div className="nav">
                <div>
                    <Link to={"/"}><p className="nav-title">Artish.Club</p></Link>
                </div>
                <div>
                    <Link to={"/posts"}><p className="nav-item">Posts</p></Link>
                </div>
            </div>
        );
    }

}