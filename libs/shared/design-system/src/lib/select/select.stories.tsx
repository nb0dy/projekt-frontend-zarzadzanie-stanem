import type { Meta } from '@storybook/react';

import { Select } from './select';

const meta: Meta<typeof Select> = {
  component: Select,
  title: 'libs/shared/design-system/Select',
};
export default meta;

const options = [
  { value: 'NDVI', label: 'NDVI' },
  { value: 'False colour (urban)', label: 'False colour (urban)' },
  { value: 'Moisture index', label: 'Moisture index' },
  { value: 'SWIR', label: 'SWIR' },
  { value: 'NDWI', label: 'NDWI' },
  { value: 'NDSI', label: 'NDSI' },
];
const placeholder = 'GLOBAL.DESIGN_SYSTEM.SELECT.PLACEHOLDER';

export const SampleSelect = {
  args: {
    options,
    placeholder,
    error: '',
  },
};

const Template = () => (
  /* eslint-disable @typescript-eslint/no-empty-function */
  <Select onChange={() => {}} options={options} placeholder={placeholder} error='Select something' />
);

export const Error = Template.bind({});