import { GiBeveledStar } from 'react-icons/gi';

const TextArea = ({ displayName, id, error, isRequired = true, ...rest }) => {
  return (
    <div className='my-5'>
      <label
        htmlFor={id}
        className='mb-2 block text-lg font-semibold dark:text-white'
      >
        <span className='flex gap-1'>
          {displayName}
          {isRequired && (
            <sup>
              <GiBeveledStar className='text-xs text-red-500' />
            </sup>
          )}
        </span>
      </label>
      <div className='relative'>
        <textarea
          {...rest}
          id={id}
          name={id}
          className={`block w-full rounded-lg border border-yellow-500 px-4   py-3 outline-none transition-all focus:border-yellow-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 ${
            2 > 4
              ? 'rounded-lg border-red-500 text-sm focus:border-red-500 focus:ring-red-500'
              : undefined
          }`}
        ></textarea>
        {error && (
          <div className='pointer-events-none absolute inset-y-0 end-0 flex items-center pe-3'>
            <svg
              className='h-4 w-4 flex-shrink-0 text-red-500'
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
            >
              <circle cx='12' cy='12' r='10' />
              <line x1='12' x2='12' y1='8' y2='12' />
              <line x1='12' x2='12.01' y1='16' y2='16' />
            </svg>
          </div>
        )}
      </div>
      {error && (
        <p
          className='mt-2 text-sm text-red-600'
          id='hs-validation-name-error-helper'
        >
          {error}
        </p>
      )}
    </div>
  );
};

export default TextArea;
