import Dashboard from '@material-ui/icons/Dashboard';
import DashboardPage from '../views/Dashboard/Dashboard.js';
import Lote from '../views/ReporteExistenciasLote/Lote';
import ExistenciasLpn from '../views/ReporteExistenciasLpn/Lpn';
import Pulled from '../views/ReportePullet/Pullet';
import RecibidosLpn from '../views/ReporteReciboLpn/RecibidoLpn';
import V1 from '../views/ReporteV1/V1';
import Kardex from '../views/Kardex/Kardex';

const adminRoutes = [
  {
    path: '/lpn',
    name: 'Existencias LPN',
    icon: 'content_paste',
    component: ExistenciasLpn,
    layout: '/admin'
  },
  {
    path: '/pulled',
    name: 'Reporte Pulled',
    icon: 'content_paste',
    component: Pulled,
    layout: '/admin'
  },
  {
    path: '/recibidoLpn',
    name: 'Recibo LPN',
    icon: 'content_paste',
    component: RecibidosLpn,
    layout: '/admin'
  },
  {
    path: '/v1',
    name: 'Reporte V1',
    icon: 'content_paste',
    component: V1,
    layout: '/admin'
  },
  {
    path: '/lote',
    name: 'Reporte Existencias Lote',
    icon: 'content_paste',
    component: Lote,
    layout: '/admin'
  },
  {
    path: '/kardex',
    name: 'Reporte Kardex',
    icon: 'content_paste',
    component: Kardex,
    layout: '/admin'
  }
];

export default adminRoutes;
