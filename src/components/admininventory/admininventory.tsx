import React from "react";

function Admininventory(): JSX.Element {
    return (
        <html lang="en" dir="ltr">
            <body>
                <div className="sidebar">
                    <div className="logo-details">
                        <i className="bx bxl-c-plus-plus"></i>
                    </div>
                </div>
                <section className="home-section">
                    <nav>
                        <div className="sidebar-button">
                            <i className="bx bx-menu sidebarBtn"></i>
                            <span className="dashboard">Dashboard</span>
                        </div>
                        <div className="search-box">
                            <input type="text" placeholder="Search..." />
                            <i className="bx bx-search"></i>
                        </div>
                        <div className="profile-details">
                            <span className="admin_name">Admin Inventory</span>
                            <i className="bx bx-chevron-down"></i>
                        </div>
                    </nav>
                </section>
            </body>
        </html>
    );
}

export default Admininventory;
