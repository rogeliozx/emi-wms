import React, { useState, useEffect, Fragment } from "react";
import TableList from "../TableList/TableList";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import "date-fns";

export default function ExistenciasLote() {
  const [lote, saveLote] = useState({});
  const columns = [
    {
      name: "#",
      selector: "id",
      sortable: true
    },
    {
      name: "PropPartNum",
      selector: "PropPartNum",
      sortable: true
    },
    {
      name: "CustParNum",
      selector: "CustParNum",
      sortable: true
    },
    {
      name: "Description",
      selector: "Description",
      sortable: true
    },
    {
      name: "QTY",
      selector: "QTY",
      sortable: true
    },
    {
      name: "Unit",
      selector: "Unit",
      sortable: true
    },
    {
      name: "Lote",
      selector: "Lote",
      sortable: true
    }
  ];
  const data = [
    {
      id: 1,
      PropPartNum: "Conan the Barbarian",
      CustParNum: "1982",
      Description: "1982",
      QTY: "1982",
      Unit: "1982",
      Lote: "1982"
    }
  ];
  const handleDateChange = date => {
    setSelectedDate(date);
  };
  const [selectedDate, setSelectedDate] = useState(new Date());

  //TODO: Volver un componente el Datepicker porque se repite mucho

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
        title={"Reporte existencias Lote"}
      />
    </Fragment>
  );
}
