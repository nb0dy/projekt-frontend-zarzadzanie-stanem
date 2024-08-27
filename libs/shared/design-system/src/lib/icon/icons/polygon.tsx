import IIconProps from './icon.type';

const Polygon = ({ width = 24, height = 24 }: IIconProps) => (
  <svg width={width} height={height} viewBox='0 0 24 24' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M11.75 6.25H14.25V3.75H11.75V6.25ZM4.75 14.25H7.25V11.75H4.75V14.25ZM16.75 20.25H19.25V17.75H16.75V20.25ZM15.25 20.2307V19.3463L8.05775 15.75H4.76925C4.34742 15.75 3.98875 15.6023 3.69325 15.3068C3.39775 15.0113 3.25 14.6526 3.25 14.2308V11.7692C3.25 11.3474 3.39775 10.9887 3.69325 10.6932C3.98875 10.3977 4.34742 10.25 4.76925 10.25H7.4155L10.25 6.99625V3.76925C10.25 3.34742 10.3978 2.98875 10.6933 2.69325C10.9887 2.39775 11.3474 2.25 11.7692 2.25H14.2308C14.6526 2.25 15.0113 2.39775 15.3068 2.69325C15.6023 2.98875 15.75 3.34742 15.75 3.76925V6.23075C15.75 6.65258 15.6023 7.01125 15.3068 7.30675C15.0113 7.60225 14.6526 7.75 14.2308 7.75H11.5845L8.75 11.0038V14.4038L15.327 17.6848V17.3385C15.409 17.0193 15.5823 16.7581 15.847 16.5548C16.1118 16.3516 16.4193 16.25 16.7693 16.25H19.2308C19.6526 16.25 20.0113 16.3977 20.3068 16.6932C20.6023 16.9887 20.75 17.3474 20.75 17.7693V20.2307C20.75 20.6526 20.6023 21.0113 20.3068 21.3068C20.0113 21.6023 19.6526 21.75 19.2308 21.75H16.7693C16.3474 21.75 15.9887 21.6023 15.6932 21.3068C15.3977 21.0113 15.25 20.6526 15.25 20.2307Z'
      fill='currentColor'
    />
  </svg>
);

export default Polygon;
