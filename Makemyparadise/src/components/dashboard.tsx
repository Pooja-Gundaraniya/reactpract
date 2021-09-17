import React from "react";
import "./dashboard.css"
import logoimg from "../assets/logo.png"

export default function Dashboard() {
    return (
        <div className='dashboard'>
            <header className="header_dash">
                <div className='top_header'>
                    <div>
                        <img src={logoimg} alt="not found" width="150%" height="250%"></img>
                    </div>
                    <div className='btnadmin'>
                        <button><b>ADMIN</b></button>
                    </div>
                </div>
                <div className='bottom_header'>
                    <div className='bottom_header_content'>filepath</div>
                </div>
            </header>

            <main>
                <div className='main_dash'>
                    <div className='sidebar'>
                        <div className='main_catalog'>
                            <p>catalog</p>
                            <ul className='catalog'>
                                <li>facets</li>
                                <li>store</li>
                                <li>use-cases</li>
                                <li>automate</li>
                                <li>concepts</li>
                                <li>packages</li>
                                <li>assets</li>
                            </ul>
                        </div>
                        <div className='main_sales'>
                            <p>sales</p>
                            <ul className='sales'>
                                <li>orders</li>
                            </ul>
                        </div>
                        <div className='main_customers'>
                            <p>customers</p>
                            <ul className='customers'>
                                <li>customers</li>
                            </ul>
                        </div>
                        <div className='main_settings'>
                            <p>settings</p>
                            <ul className='settings'>
                                <li>channels</li>
                                <li>adminstrator</li>
                                <li>roles</li>
                                <li>shipping methods</li>
                                <li>payment methods</li>
                                <li>tax categories</li>
                                <li>tax rates</li>
                                <li>countries</li>
                                <li>zones</li>
                                <li>global settings</li>
                            </ul>
                        </div>
                        <div className='main_system'>
                            <p>system</p>
                            <ul className='system'>
                                <li>job queue</li>
                                <li>systems status</li>
                            </ul>
                        </div>
                    </div>
                    <div className='main_content'>
                        <div>

                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}