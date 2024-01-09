import App from 'koa';
import {handleError} from '../services/errorService';
import router from '../routes/clientApi';
import cors from '@koa/cors';
// import cors from 'cors';

const api = new App();

api.proxy = true;

api.use(cors());
api.use(router.allowedMethods());
api.use(router.routes());

api.on('error', handleError);

export default api;
