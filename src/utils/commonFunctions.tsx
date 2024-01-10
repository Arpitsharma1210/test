import moment from 'moment';

export const convertIsoDatoToIsoDateTime = (
  date?: string,
): string | undefined => {
  if (!date) {
    return undefined;
  }
  return `${date}T${moment().format('HH:mm:ssZ')}`;
};

export const convertToIsoDateTime = (date?: string): string | undefined => {
  if (!date) {
    return undefined;
  }
  return moment(date).format('YYYY-MM-DDTHH:mm:ssZ');
};

export const convertToIsoDate = (date?: string): string | undefined => {
  if (!date) {
    return undefined;
  }
  return moment(date).format('YYYY-MM-DD');
};

export const isUndefined = (value: unknown): boolean => value === undefined;
export const isNull = (value: unknown): boolean => value === null;

export const getApiDate = (
  value: string | moment.Moment | undefined | null,
): string | undefined | null => {
  if (isNull(value)) return null;
  if (isUndefined(value)) return undefined;
  return convertToIsoDate(value as string);
};

export const convertToMomentDate = (
  value: string | moment.Moment | undefined | null,
): moment.Moment | undefined | null => {
  if (isNull(value)) return null;
  if (isUndefined(value)) return undefined;
  return moment(value);
};

/* eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types */
export const getEditUrl = (route: string) => (entity: any): string => route.replace(':id', entity?.id);

export const convertSingleToDoubleDigit = (
  value?: number,
): string | undefined => {
  if (isNull(value)) return null;
  if (isUndefined(value)) return undefined;

  if (value >= 0 && value <= 9) {
    return `0${value}`;
  }
  return `${value}`;
};
