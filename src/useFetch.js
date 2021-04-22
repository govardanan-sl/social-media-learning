import {useState , useEffect } from 'react';
const useFetch = (url) => {
    const [data,setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(null);

    useEffect(() => {
        const abortFetch = new AbortController();

        let requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          fetch(url, requestOptions,{signal : abortFetch.signal})
            .then(response => {
                if(!response.ok){
                    throw Error("Could not Fetch data");
                }
                return response.json();
            })
            .then(result => {
                setData(result);
                setIsLoading(false);
                setIsError(null);
            })
            .catch((e) =>{
                if(e.name==='AbortError'){
                    console.log("Fetch Aborted");
                }else{
                    setIsError(e.message);
                }
            });

        return () => abortFetch.abort();
    }, [url])

    return { data , isLoading, isError};
}

export default useFetch;