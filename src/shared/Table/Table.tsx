import React from 'react'
// import './Table.scss'

const Table: React.FC = () => {
    return <table>
        <thead>
            <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Stock</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Cookie</td>
                <td>$1.25</td>
                <td>15</td>

            </tr>
            <tr>
                <td>Milk</td>
                <td>$2.99</td>
                <td>26</td>

            </tr>
        </tbody>
    </table>
}


export default Table
