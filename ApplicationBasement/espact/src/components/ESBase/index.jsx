import ESBaseInstance, { ESBaseCookie } from './ESBaseInstance';
import useFetch from './useFetch';
import { configs } from './config';
//Below Snippers is only for development...
export const config = configs;
export { ESBaseCookie };
export { useFetch };

const ESBase = ESBaseInstance(config);
export default ESBase;
