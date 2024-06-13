import { useReducer, useEffect } from "react";
import { FetchState, FetchAction, FetchAcions } from "../types";

const fetchReducer = <T,>(
    state: FetchState<T>,
    action: FetchAction<T>
): FetchState<T> => {
    switch (action.type) {
        case FetchAcions.FETCH_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false,
                error: null,
            };
        case FetchAcions.FETCH_ERROR:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

const useFetchData = <T,>(
    url: string,
    initialState: T
): [T, boolean, string | null] => {
    const [state, dispatch] = useReducer(fetchReducer<T>, {
        data: initialState,
        loading: true,
        error: null,
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Http error! Status: ${response.status}`);
                }
                const result = await response.json();
                dispatch({ type: FetchAcions.FETCH_SUCCESS, payload: result });
            } catch (err) {
                if (err instanceof Error) {
                    dispatch({
                        type: FetchAcions.FETCH_ERROR,
                        payload: err.message,
                    });
                }
            }
        };

        fetchData();
    }, [url]);

    return [state.data, state.loading, state.error];
};

export default useFetchData;
