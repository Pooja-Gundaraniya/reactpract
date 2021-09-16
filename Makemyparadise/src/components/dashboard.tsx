import React from "react";
import "./dashboard.css"

export default function Dashboard() {
    return (
        <div className='dashboard'>
            <header>
                <div className='top_header'>
                    <div>logo</div>
                    <div>admin</div>
                </div>
                <div className='bottom_header'>
                    <div>filepath</div>
                </div>
            </header>
            <main>
            <div className='main'>
                <div className='sidebar'>sidebar</div>
                <div className='main_content'>mains</div>
            </div>
            </main>
        </div>
    )
}