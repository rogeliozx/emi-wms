import React, { useMemo, useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import Button from "@material-ui/core/Button";

const paginationOptions = { rowsPerPageText: 'Filas por página', rangeSeparatorText: 'de' };
const TableList = ({ data, columns, title }) => {
  return (
    <DataTable
      title={title}
      columns={columns}
      data={data}
      pagination
      paginationComponentOptions={paginationOptions}
         />
  );
};

export default TableList;
