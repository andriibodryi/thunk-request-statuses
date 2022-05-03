import { AsyncThunk, ThunkQueryOptions } from '../request-statuses.types';
import { useDispatch } from 'react-redux';
import {
  useIsLoading,
  useIsIdle,
  useIsFulfilled,
  useIsRejected,
} from './use-statuses.hook';

export const useThunkQuery = (
  thunk: AsyncThunk,
  options: ThunkQueryOptions,
) => {
  const dispatch = useDispatch();

  const fetch = (args: any) => dispatch(thunk(args)).unwrap();

  const isIdle = useIsIdle(thunk);
  const isLoading = useIsLoading(thunk);
  const isFulfilled = useIsFulfilled(thunk);
  const isRejected = useIsRejected(thunk);

  return {
    fetch,
    isIdle,
    isLoading,
    isFulfilled,
    isRejected,
  };
};
