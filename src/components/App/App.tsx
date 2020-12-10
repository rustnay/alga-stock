import React from 'react'
import Header from '../Header'

import Container from '../../shared/Container'
import './App.css'
import Table, { TableHeader } from '../../shared/Table';
import Products from '../../shared/Table/Table.mockdata';
import Form from '../../shared/Form';
import Button from '../../shared/Button'
import Input from '../../shared/Input';

const headers: TableHeader[] = [
  { key: 'id', value: '#'},
  { key: 'name', value: 'Product' },
  { key: 'price', value: 'Price' },
  { key: 'stock', value: 'Available Stock', right: true }
]

function App() {

  return (
    <div className="App"> 
    <Header title="AlgaStock" />

      <Container>
        <Table headers={headers} data={Products}/>

        <Form title="Product form" onSubmit={console.log}>

          <Input 
            label="Name" 
            placeholder="E.g.: Cookie"
          />
          <Input 
            label="Price" 
            placeholder="E.g.: 0.01"
            type="number"
            step="0.01"
            min="0"
          />
          <Input 
            label="Stock" 
            placeholder="E.g.: 15" 
            type="number"
            min="0"
          />

          <Button>
            Submit
          </Button>

        </Form>

      

      </Container>

    </div>
  );
}

export default App