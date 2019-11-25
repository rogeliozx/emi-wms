import Dashboard from '@material-ui/icons/Dashboard';
import DashboardPage from '../views/Dashboard/Dashboard.js';
import TableList from '../views/TableList/TableList.js';

const adminRoutes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: Dashboard,
    component: DashboardPage,
    layout: '/admin'
  },
  {
    path: '/table',
    name: 'Table List',
    icon: 'content_paste',
    component: TableList,
    layout: '/admin'
  }
];

export default adminRoutes;
