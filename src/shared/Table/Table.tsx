import React from 'react'
import './Table.scss'

const Table: React.FC = () => {
    return <table className="AppTable">
        <thead>
            <tr>
                <th>Product</th>
                <th>Price</th>
                <th className="right">Stock</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Cookie</td>
                <td>$1.25</td>
                <td className="right">15</td>

            </tr>
            <tr>
                <td>Milk</td>
                <td>$2.99</td>
                <td className="right">26</td>

            </tr>
            <tr>
                <td>Cookie</td>
                <td>$1.25</td>
                <td className="right">15</td>

            </tr>
            <tr>
                <td>Milk</td>
                <td>$2.99</td>
                <td className="right">26</td>

            </tr>
        </tbody>
    </table>
}


export default Table
