import { TDateString } from '@ukri/shared/utils/date';
import Geometry from 'ol/geom/Geometry';

export type TFormDefaultValues = {
  dataSets: {
    copernicus: {
      enabled: boolean;
      sentinel1: {
        enabled: boolean;
        acquisitionMode: {
          ew: boolean;
          hh: boolean;
          hh_hv: boolean;
          iw: boolean;
          vv: boolean;
          vv_vh: boolean;
        };
        orbitDirection: {
          ascending: boolean;
          descending: boolean;
        };
      };
      sentinel2: {
        enabled: boolean;
        l1c: boolean;
        l2a: boolean;
        cloudCoverage: number;
      };
      sentinel3: {
        enabled: boolean;
        slstr: boolean;
        cloudCoverage: number;
        olci: boolean;
      };
      sentinel5P: {
        enabled: boolean;
        aer_ai: boolean;
        ch4: boolean;
        cloud: boolean;
        co: boolean;
        hcho: boolean;
        no2: boolean;
        o3: boolean;
        so2: boolean;
      };
    };
    planet: {
      enabled: boolean;
      planetScope: {
        enabled: boolean;
      };
      skySat: {
        enabled: boolean;
      };
      rapidEye: {
        enabled: boolean;
      };
    };
  };
  date: {
    from: TDateString;
    to: TDateString;
  };
  aoi: Geometry | undefined;
};
