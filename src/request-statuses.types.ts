import { AsyncThunk as AsyncThunk2 } from '@reduxjs/toolkit';

export type RequestStatusesState = Record<string, string>;

export type AsyncThunk = AsyncThunk2;

export type Store = {
  requestStatuses: RequestStatusesState;
};

export interface ThunkQueryOptions {
  actionId?: string;
}
