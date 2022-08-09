import React, { Fragment } from 'react'
import Logo from "../../assets/images/logo.webp"
import { BsCart3 } from "react-icons/bs";

export default function Header() {
    return (
        <Fragment>
            <nav className="navbar bg-light  ">
                <div className="container">
                    <a className="navbar-brand" href={"/"}>
                        <img src={Logo} alt="" width="80" height="80" className="d-inline-block align-text-top" />
                    </a>
                    <a href="/" style={{fontSize: 30, color: "green"}}><span className="badge text-bg-light">4</span> <BsCart3 /></a>
                </div>
               
            </nav>

        </Fragment>
    )
}
