
export interface Product {
    id: number
    name: string
    price: number
    stock: number
}

const Products: Product[] = [
    {
        id: 1,
        name: 'Cookie',
        price: 1.25,
        stock: 20
    },
    {
        id: 2,
        name: 'Milk 1L',
        price: 2.99,
        stock: 10
    },
    {
        id: 3,
        name: 'Detergent',
        price: 0.75,
        stock: 75
    },
    {
        id: 4,
        name: 'Water 1L',
        price: 1.22,
        stock: 100
    },
    {
        id: 5,
        name: 'Chocolate',
        price: 4.65,
        stock: 50
    }
]

export default Products