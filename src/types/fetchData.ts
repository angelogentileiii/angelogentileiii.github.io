export type FetchState<T> = {
    data: T;
    loading: boolean;
    error: string | null;
};

export enum FetchActions {
    FETCH_SUCCESS = "FETCH_SUCCESS",
    FETCH_LOADING = "FETCH_LOADING",
    FETCH_ERROR = "FETCH_ERROR",
}

interface FetchDataSuccess<T> {
    type: FetchActions.FETCH_SUCCESS;
    payload: T;
}

interface FetchDataLoading {
    type: FetchActions.FETCH_LOADING;
}

interface FetchDataError {
    type: FetchActions.FETCH_ERROR;
    payload: string;
}

export type FetchAction<T> =
    | FetchDataSuccess<T>
    | FetchDataLoading
    | FetchDataError;
