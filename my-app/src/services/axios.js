import * as Config from './config';
const axios = require('axios').default;



export const getRequest = async (paramsUri) => {

    return axios.get(Config.BASE_URL + paramsUri)

}