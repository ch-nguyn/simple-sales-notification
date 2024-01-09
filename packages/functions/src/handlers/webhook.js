import App from 'koa';
import {handleError} from '../services/errorService';
import router from '../routes/webhook';

const api = new App();

api.proxy = true;

api.use(router.allowedMethods());
api.use(router.routes());

api.on('error', handleError);

export default api;
