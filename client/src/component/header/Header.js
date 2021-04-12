import React from 'react';
import './header.css';

import Dashboard from '../dashboard/Dashboard'

export const Header = () => {
    return (
        
            
            <nav>
                <div className="logo">
                    <p>CONNECT</p>
                </div>
                <div className="dashboard-container">
                    <Dashboard />
                </div> 
            </nav>
    
        
    )
}