import React from 'react';

type IconProps = {
  viewBox: string;
  d?: string;
  path?: React.ReactElement | React.ReactElement[];
};

const icons = {
  search: {
    viewBox: '0 0 10 10',
    path: (
      <path
        d="M9.76642 8.58982L7.65286 6.47626C8.22377 5.61371 8.45398 4.56987 8.29886 3.5472C8.14373 2.52453 7.61433 1.59591 6.81332 0.941464C6.01231 0.287014 4.99679 -0.0466256 3.96372 0.00525646C2.93065 0.0571385 1.95366 0.490844 1.22225 1.22225C0.490844 1.95366 0.0571385 2.93065 0.00525646 3.96372C-0.0466256 4.99679 0.287014 6.01231 0.941464 6.81332C1.59591 7.61433 2.52453 8.14373 3.5472 8.29886C4.56987 8.45398 5.61371 8.22377 6.47626 7.65286L8.58982 9.76642C8.74675 9.91799 8.95695 10.0019 9.17512 9.99997C9.3933 9.99807 9.602 9.91056 9.75628 9.75628C9.91056 9.602 9.99807 9.3933 9.99997 9.17512C10.0019 8.95695 9.91799 8.74675 9.76642 8.58982ZM1.68914 4.18547C1.68914 3.69174 1.83555 3.2091 2.10985 2.79858C2.38415 2.38806 2.77402 2.0681 3.23016 1.87916C3.68631 1.69022 4.18824 1.64079 4.67248 1.73711C5.15671 1.83343 5.60152 2.07118 5.95063 2.4203C6.29975 2.76942 6.5375 3.21422 6.63383 3.69846C6.73015 4.1827 6.68071 4.68462 6.49177 5.14077C6.30283 5.59691 5.98287 5.98678 5.57235 6.26109C5.16183 6.53538 4.67919 6.68179 4.18547 6.68179C3.5234 6.68179 2.88845 6.41879 2.4203 5.95063C1.95215 5.48248 1.68914 4.84753 1.68914 4.18547Z"
        strokeWidth="0"
      />
    )
  } as IconProps
};

export type Icons = keyof typeof icons;

export default icons;