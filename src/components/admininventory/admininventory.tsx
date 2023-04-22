import React from "react";

function Admininventory(): JSX.Element {
    return (
        <html>
            <head>
                <title>Admin Inventory Page</title>
            </head>
            <body>
                <h1>Admin Inventory Page</h1>
                <div className="sidebar">
                    <div className="logo-details">
                        <i className="bx bxl-c-plus-plus"></i>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Nike Socks</td>
                                <td>$10.99</td>
                                <td>100</td>
                            </tr>
                            <tr>
                                <td>Adidas Pants</td>
                                <td>$19.99</td>
                                <td>50</td>
                            </tr>
                            <tr>
                                <td>Adidas Socks</td>
                                <td>$5.99</td>
                                <td>200</td>
                            </tr>
                        </tbody>
                    </table>
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
                <form>
                    <label htmlFor="new-product-name">Product Name:</label>
                    <button type="submit">Add Product</button>
                </form>
            </body>
        </html>
    );
}

export default Admininventory;
