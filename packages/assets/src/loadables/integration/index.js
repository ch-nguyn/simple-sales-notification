import loadable from 'react-loadable';
import Loading from '../../components/Loading';

export default loadable({
  loader: () => import('../../pages/integration'),
  loading: Loading
});