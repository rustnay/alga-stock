import React from 'react'
import Header from '../Header'

import Container from '../../shared/Container'
import './App.css'
import Table, { TableHeader } from '../../shared/Table';
import Products from '../../shared/Table/Table.mockdata';

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

      </Container>

    </div>
  );
}

export default App