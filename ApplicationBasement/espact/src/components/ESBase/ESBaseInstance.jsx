import axios from 'axios';
import getNativeCookie from '@espact/components/Hooks/getNativeCookie';
import deleteNativeCookie from '@espact/components/Hooks/deleteNativeCookie';

const ESBaseStructure = {};

ESBaseStructure.deleteCookie = () => {
    return deleteNativeCookie();
};

export const ESBaseCookie = ESBaseStructure;

const ESBaseInstance = async (config) => {
    // const userToken = Cookies.get('JC_uft_token');
    ESBaseStructure.config = config;
    const nativeCookie = getNativeCookie();

    ESBaseStructure.post = async (requestUri, data = {}, req_config = { externalBaseUrl: false, formdata: true }) => {
        let apiURL;
        if (req_config.externalBaseUrl) {
            apiURL = requestUri;
        } else {
            apiURL = config.apiBaseUrl + requestUri;
        }
        try {
            const request = await axios({
                method: 'post',
                url: apiURL,
                data: data,
                headers: {
                    'content-type': req_config.formdata ? 'multipart/form-data' : 'application/json',
                    'authorization': nativeCookie,
                },
            });
            const getResponse = await request.data;
            const response = responseHandler(getResponse);
            return response;
        } catch (error) {
            if (error.toJSON().message === 'Network Error') {
                // alert('no internet connection');
            } else {
                const { response } = error;
                const { ...errorObject } = response;
                const getErrorMessage = responseHandler(errorObject.data);
                return getErrorMessage;
            }
        }
    };

    ESBaseStructure.get = async (requestUri, req_config = { externalBaseUrl: false, formdata: true }) => {
        let apiURL;
        if (req_config.externalBaseUrl) {
            apiURL = requestUri;
        } else {
            apiURL = config.apiBaseUrl + requestUri;
        }
        try {
            const request = await axios({
                method: 'get',
                url: apiURL,
                headers: { authorization: nativeCookie },
                Credentials: false,
            });
            const getResponse = await request.data;
            const response = responseHandler(getResponse);
            return response;
        } catch (error) {
            if (error.toJSON().message === 'Network Error') {
                // alert('no internet connection');
            } else {
                const { response } = error;
                const { ...errorObject } = response;
                const getErrorMessage = responseHandler(errorObject.data);
                return getErrorMessage;
            }
        }
    };

    const responseHandler = (data = {}, params = {}) => {
        const returnHandler = {};
        returnHandler.on = (type, callable) => {
            if (type === 'static') {
                return callable(data);
            } else {
                throw new Error(`Unknown fetch dataset, use either (static or watch)`);
            }
        };
        return returnHandler;
    };
    return ESBaseStructure;
};

export default ESBaseInstance;
