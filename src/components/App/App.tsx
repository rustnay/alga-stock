import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'

import Header from '../Header'

import Container from '../../shared/Container'
import './App.css'
import Table, { TableHeader } from '../../shared/Table';
import { Product } from '../../shared/Table/Table.mockdata';
import ProductForm, { ProductCreator } from '../Products/ProductForm';
import { createSingleProduct, deleteSingleProduct, getAllProducts, updateSingleProduct } from '../../services/Products.service'

const headers: TableHeader[] = [
  { key: 'id', value: '#' },
  { key: 'name', value: 'Product' },
  { key: 'price', value: 'Price' },
  { key: 'stock', value: 'Available Stock', right: true }
]

function App() {

  const [products, setProducts] = useState<Product[]>([])
  const [updatingProduct, setUpdatingProduct] = useState<Product | undefined>(products[0])

  async function fetchData() {
    const _products = await getAllProducts()
    setProducts(_products)
  }

  useEffect(() => {

    fetchData()
  }, [])
  getAllProducts().then(console.log)

  const handleProductSubmit = async (product: ProductCreator) => {

    try {
      await createSingleProduct(product)
      fetchData()
    } catch (error) {
      Swal.fire('Oops!', error.message, 'error')
    }
  }

  const handleProductUpdate = async (newProduct: Product) => {

    try {

     await updateSingleProduct(newProduct)

      setUpdatingProduct(undefined)
      fetchData()

    } catch (error) {
      Swal.fire('Oops!', error.message, 'error')
    }
  }

  const deleteProduct = async (id: string) => {
    try {
      await deleteSingleProduct(id)
      Swal.fire('Uhul!', 'Product successfully deleted', 'success')
      fetchData()
    } catch (error) {
      Swal.fire('Oops!', error.message, 'error')
    }
  }

  const handleProductDelete = (product: Product) => {

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#09f',
      cancelButtonColor: '#d33',
      confirmButtonText: `Yes, delete ${product.name}`
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProduct(product._id)
      }
    })

  }

  const handleProductDetail = (product: Product) => {

    Swal.fire(
      'Product details',
      `${product.name} costs $${product.price} and we have ${product.stock} available in stock.`,
      'info'
    )
  }

  const handleProductEdit = (product: Product) => {
    setUpdatingProduct(product)
  }


  return (
    <div className="App">
      <Header title="AlgaStock" />

      <Container>
        <Table
          headers={headers}
          data={products}
          enableActions={true}
          onDelete={handleProductDelete}
          onDetail={handleProductDetail}
          onEdit={handleProductEdit}

        />

        <ProductForm
          form={updatingProduct}
          onSubmit={handleProductSubmit}
          onUpdate={handleProductUpdate}
        />


      </Container>

    </div>
  );
}

export default App