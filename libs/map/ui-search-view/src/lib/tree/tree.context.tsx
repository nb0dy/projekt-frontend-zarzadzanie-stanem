import isFunction from 'lodash/isFunction';
import { createContext, PropsWithChildren, SetStateAction, useCallback, useState } from 'react';

export type TTreeSettings = {
  'dataSets.copernicus.sentinel1.enabled': boolean;
  'dataSets.copernicus.sentinel2.enabled': boolean;
  'dataSets.copernicus.sentinel3.enabled': boolean;
  'dataSets.copernicus.sentinel5P.enabled': boolean;
  'dataSets.planet.planetScope.enabled': boolean;
  'dataSets.planet.skySat.enabled': boolean;
  'dataSets.planet.rapidEye.enabled': boolean;
};

export const defaultSettings: TTreeSettings = {
  'dataSets.copernicus.sentinel1.enabled': false,
  'dataSets.copernicus.sentinel2.enabled': false,
  'dataSets.copernicus.sentinel3.enabled': false,
  'dataSets.copernicus.sentinel5P.enabled': false,
  'dataSets.planet.planetScope.enabled': false,
  'dataSets.planet.skySat.enabled': false,
  'dataSets.planet.rapidEye.enabled': false,
};

type TTreeSettingsContext = {
  settings: TTreeSettings;
  changeSettings: (settings: Partial<TTreeSettings> | ((settings: TTreeSettings) => TTreeSettings)) => void;
};

export const TreeSettings = createContext<TTreeSettingsContext>({
  settings: defaultSettings,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  changeSettings: () => {},
});

const isCallback = (
  settings: Partial<TTreeSettings> | ((settings: TTreeSettings) => TTreeSettings)
): settings is SetStateAction<TTreeSettings> => {
  return isFunction(settings);
};

type TTreeSettingsProviderProps = PropsWithChildren<{ defaultSettings?: TTreeSettings }>;

export const TreeSettingsProvider = ({
  children,
  defaultSettings: defaultValues = defaultSettings,
}: TTreeSettingsProviderProps) => {
  const [settings, setSettings] = useState({ ...defaultValues });

  const changeSettings = useCallback(
    (newSettings: Partial<TTreeSettings> | ((newSettings: TTreeSettings) => TTreeSettings)) => {
      if (isCallback(newSettings)) {
        setSettings(newSettings);
      } else {
        setSettings((currentSettings) => ({ ...currentSettings, ...newSettings }));
      }
    },
    [setSettings]
  );

  return <TreeSettings.Provider value={{ settings, changeSettings }}>{children}</TreeSettings.Provider>;
};