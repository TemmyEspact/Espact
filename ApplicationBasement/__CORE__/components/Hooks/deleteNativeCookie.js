import Cookies from 'js-cookie';

export default function deleteNativeCookie() {
    const ipcRenderer = window?.ipcRenderer;
    if (ipcRenderer) {
        return ipcRenderer.send('electron-store-delete', 'JC_uft_token');
    } else {
        return Cookies.remove('JC_uft_token');
    }
}
