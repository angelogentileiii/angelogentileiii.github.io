export type FetchState<T> = {
    data: T;
    loading: boolean;
    error: string | null;
};

export enum FetchAcions {
    FETCH_SUCCESS = "FETCH_SUCCESS",
    FETCH_LOADING = "FETCH_LOADING",
    FETCH_ERROR = "FETCH_ERROR",
}

interface FetchDataSuccess<T> {
    type: FetchAcions.FETCH_SUCCESS;
    payload: T;
}

interface FetchDataLoading {
    type: FetchAcions.FETCH_LOADING;
}

interface FetchDataError {
    type: FetchAcions.FETCH_ERROR;
    payload: string;
}

export type FetchAction<T> =
    | FetchDataSuccess<T>
    | FetchDataLoading
    | FetchDataError;
