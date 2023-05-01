import React from "react";
import Navbar from "../navbarcomponent/navbar";
function Checkout(): JSX.Element {
    return (
        <div>
            <Navbar />
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Product</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Compression Socks</th>
                        <td>$12.99</td>
                        <td>1</td>
                        <td>$12.99</td>
                    </tr>
                    <tr>
                        <th scope="row">Adidas T-Shirt</th>
                        <td>$24.99</td>
                        <td>2</td>
                        <td>$49.98</td>
                    </tr>
                    <tr>
                        <th scope="row">Champion Shorts</th>
                        <td>$19.99</td>
                        <td>3</td>
                        <td>$59.97</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Checkout;
