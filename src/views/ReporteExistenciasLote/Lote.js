import React, {useState, useEffect, Fragment} from 'react';
import TableList from '../TableList/TableList';

export default function ExistenciasLote(){
  const [saveData] = useState({});

  const columns = [
    {
      name: '#',
      selector: 'id',
      sortable: true
    },
    {
      name: 'PropPartNum',
      selector: 'PropPartNum',
      sortable: true
    },
    {
      name: 'CustParNum',
      selector: 'CustParNum',
      sortable: true
    },
    {
      name: 'Description',
      selector: 'Description',
      sortable: true
    },
    {
      name: 'QTY',
      selector: 'QTY',
      sortable: true
    },
    {
      name: 'Unit',
      selector: 'Unit',
      sortable: true
    },
    {
      name: 'Lote',
      selector: 'Lote',
      sortable: true
    }
  ];

  const data = [
    {
      id: 1,
      PropPartNum: 'Conan the Barbarian',
      CustParNum: '1982',
      Description: '1982',
      QTY: '1982',
      Unit: '1982',
      Lote: '1982'
    }];

  return (
    <Fragment>

      <TableList
        data={data}
        columns={columns}
        title={'Reporte existencias Lote'}/>
    </Fragment>
  );

}
