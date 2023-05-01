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
                        <th scope="row">Socks</th>
                        <td>Nike</td>
                        <td>$12.99</td>
                        <td>#000001</td>
                    </tr>
                    <tr>
                        <th scope="row">T-Shirt</th>
                        <td>Adidas</td>
                        <td>$24.99</td>
                        <td>#000002</td>
                    </tr>
                    <tr>
                        <th scope="row">Shorts</th>
                        <td>Puma</td>
                        <td>$19.99</td>
                        <td>#000003</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Checkout;
