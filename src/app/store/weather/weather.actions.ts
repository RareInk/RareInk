import { Action } from '@ngrx/store';

export const WEATHER_GET = 'weather/WEATHER_GET';
export const WEATHER_GET_SUCCESS = 'weather/WEATHER_GET_SUCCESS';
export const WEATHER_GET_FAIL = 'weather/WEATHER_GET_FAIL';

export const AIR_QUALITY_GET = 'weather/AIR_QUALITY_GET';
export const AIR_QUALITY_GET_SUCCESS = 'weather/AIR_QUALITY_GET_SUCCESS';
export const AIR_QUALITY_GET_FAIL = 'weather/AIR_QUALITY_GET_FAIL';

export const SELECT_CITY = 'weather/SELECT_CITY';

export const WEATHER_DATA_GET = 'weather/WEATHER_DATA_GET';
export const WEATHER_DATA_GET_SUCCESS = 'weather/WEATHER_DATA_GET_SUCCESS';
export const WEATHER_DATA_GET_FAIL = 'weather/WEATHER_DATA_GET_FAIL';

interface ILocation {
  longitude: number;
  latitude: number;
}

/* Weather Get */
export class WeatherGet implements Action {
  readonly type = WEATHER_GET;

  constructor(public payload: ILocation) {}
}

export class WeatherGetSuccess implements Action {
  readonly type = WEATHER_GET_SUCCESS;

  constructor(public payload: string) {}
}

export class WeatherGetFail implements Action {
  readonly type = WEATHER_GET_FAIL;

  constructor(public payload: string) {}
}

/* Weather Air */
export class WeatherAirQuality implements Action {
  readonly type = AIR_QUALITY_GET;

  constructor(public payload: ILocation) {}
}

export class WeatherAirQualitySuccess implements Action {
  readonly type = AIR_QUALITY_GET_SUCCESS;

  constructor(public payload: string) {}
}

export class WeatherAirQualityFail implements Action {
  readonly type = AIR_QUALITY_GET_FAIL;

  constructor(public payload: string) {}
}

/* Select City */
export class WeatherSelectCity implements Action {
  readonly type = SELECT_CITY;

  constructor(public payload: string) {}
}

/* Weather Data Get */
export class WeatherDataGet implements Action {
  readonly type = WEATHER_DATA_GET;

  constructor(public payload: ILocation) {}
}

export class WeatherDataGetSuccess implements Action {
  readonly type = WEATHER_DATA_GET_SUCCESS;

  constructor(public payload: string) {}
}

export class WeatherDataGetFail implements Action {
  readonly type = WEATHER_DATA_GET_FAIL;

  constructor(public payload: string) {}
}

export type Actions =
  | WeatherGet
  | WeatherGetSuccess
  | WeatherGetFail
  | WeatherAirQuality
  | WeatherAirQualitySuccess
  | WeatherAirQualityFail
  | WeatherSelectCity
  | WeatherDataGet
  | WeatherDataGetSuccess
  | WeatherDataGetFail;
