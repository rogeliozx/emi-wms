import React, {useState, useEffect, Fragment} from 'react';
import TableList from '../TableList/TableList';

export default function Pulled(){
  const [saveData] = useState({});

  const columns = [
    {
      name: 'Registro',
      selector: 'Registro',
      sortable: true
    },
    {
      name: 'ProvPartNum',
      selector: 'ProvPartNum',
      sortable: true
    },
    {
      name: 'CustPartNum',
      selector: 'CustPartNum',
      sortable: true
    },
    {
      name: 'Description',
      selector: 'Description',
      sortable: true
    },
    {
      name: 'Qty_Sent',
      selector: 'Qty_Sent',
      sortable: true
    },
    {
      name: 'Unit',
      selector: 'Unit',
      sortable: true
    },
    {
      name: 'Codigo_Cliente',
      selector: 'Codigo_Cliente',
      sortable: true
    },
    {
      name: 'No_Pedido_Cliente',
      selector: 'No_Pedido_Cliente',
      sortable: true
    },
    {
      name: 'Serial',
      selector: 'Serial',
      sortable: true
    }
  ];

  const data = [
    {
      Registro: 1,
      ProvPartNum: 'Conan the Barbarian',
      CustPartNum: '1982',
      Description: '1982',
      Qty_Sent: '1982',
      Unit: '1982',
      Codigo_Cliente: '1982',
      No_Pedido_Cliente: '1982',
      Serial: '1982'
    }];

  return (
    <Fragment>

      <TableList
        data={data}
        columns={columns}
        title={'Reporte existencias LPN'}/>
    </Fragment>
  );

}
