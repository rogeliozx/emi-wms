import React, { useState, useEffect, Fragment } from "react";
import TableList from "../TableList/TableList";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import "date-fns";

export default function RecibidosLpn() {
  const [saveData] = useState({});
  const columns = [
    {
      name: "Registro",
      selector: "Registro",
      sortable: true
    },
    {
      name: "ProvPartNum",
      selector: "ProvPartNum",
      sortable: true
    },
    {
      name: "CustPartNum",
      selector: "CustPartNum",
      sortable: true
    },
    {
      name: "Description",
      selector: "Description",
      sortable: true
    },
    {
      name: "Qty_Recived",
      selector: "Qty_Recived",
      sortable: true
    },
    {
      name: "Unit",
      selector: "Unit",
      sortable: true
    },
    {
      name: "Serial",
      selector: "Serial",
      sortable: true
    },
    {
      name: "Lote",
      selector: "Lote",
      sortable: true
    },
    {
      name: "Pedimiento",
      selector: "Pedimiento",
      sortable: true
    },
    {
      name: "Recipet_Date",
      selector: "Recipet_Date",
      sortable: true
    },
    {
      name: "Invoice",
      selector: "Invoice",
      sortable: true
    }
  ];
  const data = [
    {
      Registro: 1,
      ProvPartNum: "Conan the Barbarian",
      CustPartNum: "1982",
      Description: "1982",
      Qty_Recived: "1982",
      Unit: "1982",
      Serial: "1982",
      Lote: "1982",
      Pedimiento: "1982",
      Recipet_Date: "1982",
      Invoice: "1982"
    }
  ];
  const handleDateChange = date => {
    setSelectedDate(date);
  };
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <Fragment>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justify="space-around">
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Date picker inline"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date"
            }}
          />
          <KeyboardDatePicker
            margin="normal"
            id="date-picker-dialog"
            label="Date picker dialog"
            format="MM/dd/yyyy"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date"
            }}
          />
        </Grid>
      </MuiPickersUtilsProvider>
      <TableList
        data={data}
        columns={columns}
        title={"Reporte Recibidos LPN"}
      />
    </Fragment>
  );
}
