import React, { useEffect, useState } from 'react';
import './dashboard.css';


const Dashboard = ({ setAuth }) => {

    const [name, setName] = useState("");

    async function getName() {
        try {
            
            const response = await fetch("http://localhost:3001/dashboard/", {
                method: "GET",
                headers: {token: localStorage.token}
            })

            const parseRes = await response.json();
            
            setName(parseRes.user_name)
        } catch (error) {
            console.error(error.message)
        }
    }

    // // const logout = (e) => {
    // //     e.preventDefault();
    // //     localStorage.removeItem("token")
    // //     setAuth(false);
    // }

    useEffect(() => {
        getName()
    }, []);

    return (
        <section className="dashboard">
            <div className="post-icon">
            <i class="fa fa-plus-circle"></i>
            </div>
            <div className="notification-icon">
                <i className="fa fa-bell"></i>
            </div>
            <div className="search-icon">
                <i className="fa fa-search"></i>
            </div>
            <div className="profile-icon_photo">
                <i class="fas fa-portrait"></i>
            </div>
        </section>
            
    )
}

export default Dashboard;
