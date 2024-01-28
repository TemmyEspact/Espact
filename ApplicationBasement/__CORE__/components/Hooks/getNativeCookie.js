import Cookies from 'js-cookie';

export default function getNativeCookie() {
    const ipcRenderer = window?.ipcRenderer;
    if (ipcRenderer) {
        return ipcRenderer.sendSync('electron-store-get', 'JC_uft_token');
    } else {
        return Cookies.get('JC_uft_token');
    }
}
