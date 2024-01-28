import { useEffect, useState } from 'react';
import { configs } from './config';
import ESBase from './ESBaseInstance';
const ESBaseInit = ESBase(configs);

export default function useFetch(url) {
    const [fetchedData, setFetchedData] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [refreshKey, setRefreshKey] = useState(0);

    const setRefresh = () => {
        setRefreshKey((oldKey) => oldKey + 1);
    };

    useEffect(() => {
        (async () => {
            setLoading(true);
            const ESBase = await ESBaseInit;
            const getter = await ESBase.get(url);
            getter.on('static', (response) => {
                if (response.data) {
                    setFetchedData(response.data);
                    setLoading(false);
                }
            });
        })();
    }, [refreshKey]);

    return { loading, fetchedData, error, setRefresh };
}
