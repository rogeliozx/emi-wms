import React from "react";
import Button from "@material-ui/core/Button";
import TableChartSharpIcon from "@material-ui/icons/TableChartSharp";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";

const convertArrayOfObjectsToCSV = (data, namesTable) => {
  const isObjEmpty =
    Object.entries(data).length === 0 && data.constructor === Object;
  if (isObjEmpty) {
    return;
  }
  removeEmpty(data[0]);
  let result;
  const columnDelimiter = ",";
  const lineDelimiter = "\n";
  const keys = Object.keys(data[0]);
  const nameTable = [];
  keys.map(key => {
    namesTable.map(data => {
      if (data[1] == key) nameTable.push(data[0]);
    });
  });
  result = "";
  result += nameTable.join(columnDelimiter);
  result += lineDelimiter;
  data.forEach(item => {
    let ctr = 0;
    keys.forEach(key => {
      if (ctr > 0) result += columnDelimiter;

      result += item[key];

      ctr++;
    });
    result += lineDelimiter;
  });
  return result;
};
const downloadCSV = data => {
  const isObjEmpty =
    Object.entries(data).length === 0 && data.constructor === Object;
  if (isObjEmpty) {
    return;
  }
  if (data.data.length <= 0) {
    return;
  }
  const link = document.createElement("a");
  let csv = convertArrayOfObjectsToCSV(data.data, data.namesCsv);
  if (csv == null) return;
  const filename = "export.csv";
  if (!csv.match(/^data:text\/csv/i)) {
    csv = `data:text/csv;charset=utf-8,${csv}`;
  }
  link.setAttribute("href", encodeURI(csv));
  link.setAttribute("download", filename);
  link.click();
};

const removeEmpty = obj => {
  Object.entries(obj).forEach(([key, val]) => {
    if (val && typeof val === "object") removeEmpty(val);
    else if (val == null) delete obj[key];
  });
};

const Csv = props => {
  const theme = createMuiTheme({
    palette: {
      primary: green
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Button
        onClick={() => {
          downloadCSV(props);
        }}
        variant="contained"
        color="primary"
      >
        <TableChartSharpIcon />
        Export
      </Button>
    </ThemeProvider>
  );
};

export default Csv;
