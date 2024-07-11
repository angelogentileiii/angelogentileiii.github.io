import { useReducer, useEffect } from "react";
import { FetchState, FetchAction, FetchActions } from "../../types";

// reducer for FetchData hook
const fetchReducer = <T,>(
    state: FetchState<T>,
    action: FetchAction<T>
): FetchState<T> => {
    switch (action.type) {
        case FetchActions.FETCH_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false,
                error: null,
            };
        case FetchActions.FETCH_LOADING:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case FetchActions.FETCH_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

// useFetchData hook >> interchangeable hook to fetch local JSON data for site
const useFetchData = <T,>(url: string): [T | null, boolean, string | null] => {
    const [state, dispatch] = useReducer(fetchReducer, {
        data: null,
        loading: true,
        error: null,
    });

    useEffect(() => {
        const fetchData = async () => {
            dispatch({ type: FetchActions.FETCH_LOADING });
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Http error! Status: ${response.status}`);
                }
                const result = await response.json();
                if (!result) {
                    throw new Error(`Data could not be fetched properly.`);
                } else {
                    dispatch({
                        type: FetchActions.FETCH_SUCCESS,
                        payload: result,
                    });
                }
            } catch (err) {
                if (err instanceof Error) {
                    dispatch({
                        type: FetchActions.FETCH_ERROR,
                        payload: err.message,
                    });
                }
            }
        };

        // runs the fetch data on page load or on URL change for hook arg
        fetchData();
    }, [url]);

    // returns the data from the fetch (with typecasting of structure), loading state, and error state
    return [state.data as T, state.loading, state.error];
};

export default useFetchData;
