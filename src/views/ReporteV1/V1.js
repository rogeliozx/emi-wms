import React, {useState, useEffect, Fragment} from 'react';
import TableList from '../TableList/TableList';

export default function V1(){
  const [saveData] = useState({});

  const columns = [
    {
      name: 'Registro',
      selector: 'Registro',
      sortable: true
    },
    {
      name: 'Folio',
      selector: 'Folio',
      sortable: true
    },
    {
      name: 'FechaSalida',
      selector: 'FechaSalida',
      sortable: true
    },
    {
      name: 'ProvPNum',
      selector: 'ProvPNum',
      sortable: true
    },
    {
      name: 'CustPNum',
      selector: 'CustPNum',
      sortable: true
    },
    {
      name: 'Nombre',
      selector: 'Nombre',
      sortable: true
    },
    {
      name: 'Pu',
      selector: 'Pu',
      sortable: true
    },
    {
      name: 'Qty',
      selector: 'Qty',
      sortable: true
    },
    {
      name: 'Medida',
      selector: 'Medida',
      sortable: true
    },
    {
      name: 'Peso',
      selector: 'Peso',
      sortable: true
    },
    {
      name: 'Precio_To',
      selector: 'Precio_To',
      sortable: true
    },
    {
      name: 'Moneda',
      selector: 'Moneda',
      sortable: true
    },
    {
      name: 'Factura',
      selector: 'Factura',
      sortable: true
    },
    {
      name: 'Fraccion',
      selector: 'Fraccion',
      sortable: true
    },
    {
      name: 'No_de_pedimento_Aduanal',
      selector: 'No_de_pedimento_Aduanal',
      sortable: true
    },
    {
      name: 'FechaPA',
      selector: 'FechaPA',
      sortable: true
    },
    {
      name: 'Cliente',
      selector: 'Cliente',
      sortable: true
    }
  ];

  const data = [
    {
      Registro: 1,
      Folio: 'Conan the Barbarian',
      FechaSalida: '1982',
      ProvPNum: '1982',
      CustPNum: '1982',
      Nombre: '1982',
      Pu: '1982',
      Qty: '1982',
      Medida: '1982',
      Peso: '1982',
      Precio_To: '1982',
      Moneda: '1982',
      Factura: '1982',
      Fraccion: '1982',
      No_de_pedimento_Aduanal: '1982',
      FechaPA: '1982',
      Cliente: '1982'
    }];

  return (
    <Fragment>

      <TableList
        data={data}
        columns={columns}
        title={'Reporte V1'}/>
    </Fragment>
  );

}
