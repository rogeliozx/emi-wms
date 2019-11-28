import React, { useMemo } from "react";
import DataTable from "react-data-table-component";
import Button from "@material-ui/core/Button";

function convertArrayOfObjectsToCSV(array) {
  let result;
  const columnDelimiter = ",";
  const lineDelimiter = "\n";
  const keys = Object.keys(array[0]);
  result = "";
  result += keys.join(columnDelimiter);
  result += lineDelimiter;
  array.forEach(item => {
    let ctr = 0;
    keys.forEach(key => {
      if (ctr > 0) result += columnDelimiter;

      result += item[key];

      ctr++;
    });
    result += lineDelimiter;
  });
  return result;
}

function downloadCSV(array) {
  const link = document.createElement("a");
  let csv = convertArrayOfObjectsToCSV(array);
  if (csv == null) return;
  const filename = "export.csv";
  if (!csv.match(/^data:text\/csv/i)) {
    csv = `data:text/csv;charset=utf-8,${csv}`;
  }
  link.setAttribute("href", encodeURI(csv));
  link.setAttribute("download", filename);
  link.click();
}

const Export = ({ onExport }) => (
  <Button
    variant="contained"
    color="primary"
    onClick={e => onExport(e.target.value)}
  >
    Export
  </Button>
);

const TableList = ({ data, columns, title }) => {
  const actionsMemo = useMemo(
    () => <Export onExport={() => downloadCSV(data)} />,
    []
  );

  return (
    <DataTable
      title={title}
      columns={columns}
      data={data}
      actions={actionsMemo}
  
    />
  );
};

export default TableList;
