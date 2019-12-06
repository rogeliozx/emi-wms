import React, { useState, useEffect, Fragment } from "react";
import { createBrowserHistory } from "history";
import TableList from "../TableList/TableList";
import Grid from "@material-ui/core/Grid";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import Select from "react-select";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import axios from "axios";
import Csv from '../../layouts/csv';

const options = [];
export default function ExistenciasLpn() {
  const hist = createBrowserHistory();
  let list;
  let listToOptions = {
    value: "",
    label: ""
  };
  useEffect(() => {
    list = JSON.parse(localStorage.getItem("Data"));
    console.log(list);
    if (!list) {
      hist.push("/auth/login");
      hist.go("/auth/login");
    }
    if(options.length<=0){
    list.map(data => {
      data.listaCedisEmpresaDto.map(cedis => {
        listToOptions.value = cedis;
        listToOptions.label = `${cedis.nombreCedis}| ${cedis.nombreEmpresa}`;
        options.push(listToOptions);
        listToOptions = {
          value: "",
          label: ""
        };
      });
    });
  }
  }, [firstDate, secondDate, lpn]);

  const [firstDate, setFirstDate] = useState(new Date());
  const [secondDate, setSecondDate] = useState(new Date());
  const [lpn, saveLpn] = useState({});
  const [cedis, saveCedis] = useState([]);
  const columns = [
    {
      name: "ProvPartNum",
      selector: "claveLPN",
      sortable: true
    },
    {
      name: "CustPartNum",
      selector: "claveProductoOrigen",
      sortable: true
    },
    {
      name: "Description",
      selector: "claveProducto",
      sortable: true
    },
    {
      name: "Qty",
      selector: "nombreProducto",
      sortable: true
    },
    {
      name: "Unit",
      selector: "cantidad",
      sortable: true
    },
    {
      name: "Serial_Number",
      selector: "claveUnidadMedida",
      sortable: true
    },
    {
      name: "claveLPN",
      selector: "claveLPN",
      sortable: true
    },
    {
      name: "lote",
      selector: "lote",
      sortable: true
    },
    {
      name: "Receipt_Date",
      selector: "fechaRegistro",
      sortable: true
    },
    {
      name: "Invoice",
      selector: "documentoCliente",
      sortable: true
    }
  ];
  const initialDate = date => {
    setFirstDate(date);
  };
  const lastDate = date => {
    setSecondDate(date);
  };
  let cedisEntreprise = {};
  const selectValue = cedis => {
  if(cedis){
    cedisEntreprise = cedis.map(data => {
      return data.value;
    });
  saveCedis(cedisEntreprise);
  }
   
  };

  const _fechasReportesDto = {
    fechaInicial: "",
    fechaFinal: "",
     listaCedisEmpresa: []
  };
  const getData =  () => {
    _fechasReportesDto.fechaInicial = formatDate(firstDate);
    _fechasReportesDto.fechaFinal = formatDate(secondDate);
    _fechasReportesDto.listaCedisEmpresa=cedis;
    console.log(_fechasReportesDto);
   axios.post("http://localhost:3001/reposent/existenciaslpn", _fechasReportesDto)
   .then(result => {
     console.log(result)
    const  {data}=result
    if(data){
      saveLpn(data);
    }
  }).catch(e=>{
    console.log(e);
  })
  ;
     
  };

  function formatDate(date) {
    let d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();
    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;
    return [year, month, day].join("-");
  }
  return (
    <Fragment>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justify="center" spacing={3}>
          <Grid item xs={6}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Date picker inline"
              value={firstDate}
              onChange={initialDate}
              KeyboardButtonProps={{
                "aria-label": "change date"
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Date picker inline"
              value={secondDate}
              onChange={lastDate}
              KeyboardButtonProps={{
                "aria-label": "change date"
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <Select
              options={options}
              className="basic-multi-select"
              isMulti
              onChange={selectValue}
            />
          </Grid>
          <Grid item xs={6}>
            <Button
              type="button"
              variant="contained"
              color="primary"
              onClick={getData}
            >
              <SearchIcon />
            </Button>
          </Grid>
          <Grid item xs={9}>
          </Grid>
          <Grid item xs={3}>
              <Csv
              data={lpn}
              />
          </Grid>
        </Grid>
      </MuiPickersUtilsProvider>
      <TableList columns={columns}
      data={lpn}
      title={"Reporte existencias LPN"} />
    </Fragment>
  );
}
