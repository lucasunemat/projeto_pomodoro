import { useEffect, useRef } from 'react';

function useInterval<C extends CallableFunction
>(callback: C, delay: number | null): void {
    const savedCallback = useRef<C>();

    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        function tick() {
            //passa a ultima callback
            if (savedCallback.current) savedCallback.current();
        }
        //se valor de delay não for nulo...
        if (delay !== null) {
            //cria um intervalo com a função callback que tem dentro de tick
            let id = setInterval(tick, delay);
            //depois de criar o intervalo, retorna uma função que limpa o intervalo
            return () => clearInterval(id);
        }

    }, [delay]);
}