import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { apiCall } from '../redux/actions';

interface Entity<T> {
    entity: T;
    refreshEntity: () => void;
}
export const useEntity = <T extends unknown>(endpoint: string, entityId?:(string | number)): (Entity<T | undefined>) => {
  const { id } = useParams<{ id?: string }>();
  const reduxDispatch = useDispatch();
  const [entity, setEntity] = useState<T | undefined>(undefined);
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    if (id || entityId) {
      reduxDispatch(apiCall(`${endpoint}/${entityId || id}`, (res) => {
        setEntity(res);
      }, (err) => { console.log(err); })); // eslint-disable-line no-console
    }
  }, [refresh]);

  const refreshEntity = () => {
    setRefresh((prevRefresh) => !prevRefresh);
  };

  return { entity, refreshEntity };
};
