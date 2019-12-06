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
import Csv from "../../layouts/csv";

const optionsV1 = [];
export default function V1() {
  const columns = [
    {
      name: "#",
      selector: "claveLPN",
      sortable: true
    },
    {
      name: "Folio",
      selector: "documentoClienteSalida",
      sortable: true
    },
    {
      name: "FechaSalida",
      selector: "fechaFin",
      sortable: true
    },
    {
      name: "ProvPartNum",
      selector: "claveProductoOrigen",
      sortable: true
    },
    {
      name: "CustPartNum",
      selector: "claveProducto",
      sortable: true
    },
    {
      name: "Description",
      selector: "nombreProducto",
      sortable: true
    },
    {
      name: "Qty",
      selector: "cantidad",
      sortable: true
    },
    {
      name: "Unit",
      selector: "claveUnidadMedida",
      sortable: true
    },
    {
      name: "Peso",
      selector: "pesoProducto",
      sortable: true
    },
    {
      name: "PrecioTotal",
      selector: "precioTotalProducto",
      sortable: true
    },
    {
      name: "Moneda",
      selector: "tipoDeMonedaProducto",
      sortable: true
    },
    {
      name: "Factura",
      selector: "documentoClienteEntrada",
      sortable: true
    },
    {
      name: "Fraccion",
      selector: "fraccionArancelaria",
      sortable: true
    },
    {
      name: "No_De_Pedidimento_Aduanal",
      selector: "documentoProveedor",
      sortable: true
    },
    {
      name: "FechaPA",
      selector: "fechaHoraCreacion",
      sortable: true
    },
    {
      name: "Cliente",
      selector: "nombreDestino",
      sortable: true
    },
    {
      name: "Pais",
      selector: "paisOrigenProducto",
      sortable: true
    }
  ];
  const namesCsv = [];
  if (namesCsv.length <= 0) {
    columns.map(data => {
      namesCsv.push([data.name, data.selector]);
    });
  }
  const hist = createBrowserHistory();
  let list;
  let listToOptions = {
    value: "",
    label: ""
  };
  useEffect(() => {
    list = JSON.parse(localStorage.getItem("Data"));
    if (!list) {
      hist.push("/auth/login");
      hist.go("/auth/login");
    }

    if (optionsV1.length <= 0) {
      list.map(data => {
        data.listaCedisEmpresaDto.map(cedis => {
          listToOptions.value = cedis;
          listToOptions.label = `${cedis.nombreCedis}| ${cedis.nombreEmpresa}`;
          optionsV1.push(listToOptions);
          listToOptions = {
            value: "",
            label: ""
          };
        });
      });
    }
  }, [firstDate, secondDate, pullet]);

  const [firstDate, setFirstDate] = useState(new Date());
  const [secondDate, setSecondDate] = useState(new Date());
  const [pullet, savePullet] = useState({});
  const [cedis, saveCedis] = useState([]);

  const initialDate = date => {
    setFirstDate(date);
  };
  const lastDate = date => {
    setSecondDate(date);
  };
  let cedisEntreprise = {};
  const selectValue = cedis => {
    if (cedis) {
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

  const getData = () => {
    _fechasReportesDto.fechaInicial = formatDate(firstDate);
    _fechasReportesDto.fechaFinal = formatDate(secondDate);
    _fechasReportesDto.listaCedisEmpresa = cedis;

    axios
      .post("http://192.168.2.10:3001/repossal/repv1", _fechasReportesDto)
      .then(result => {
        const { data } = result;
        if (data) {
          savePullet(data);
        }
      })
      .catch(e => {
        console.log(e);
      });
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
              options={optionsV1}
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
          <Grid item xs={9}></Grid>
          <Grid item xs={3}>
            <Csv namesCsv={namesCsv} data={pullet} />
          </Grid>
        </Grid>
      </MuiPickersUtilsProvider>
      <TableList columns={columns} data={pullet} />
    </Fragment>
  );
}
