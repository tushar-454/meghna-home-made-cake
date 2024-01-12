import Image from 'next/image';

const CommentCard = ({ comment }) => {
  return (
    <a
      className='group flex flex-col rounded-xl border bg-white shadow-sm transition hover:shadow-md dark:border-gray-800 dark:bg-slate-900 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
      href='#'
    >
      <div className='p-4 md:p-5'>
        <div className='flex flex-col items-center justify-between gap-4'>
          <div className='items-cente flex h-52 w-full flex-col justify-center rounded-t-xl  object-cover'>
            <Image
              src={comment.image}
              alt=''
              width={100}
              height={100}
              className='h-full w-full object-cover'
            />
          </div>
          <div>
            <h3 className='font-semibold text-gray-800 group-hover:text-blue-600 dark:text-gray-200 dark:group-hover:text-gray-400'>
              {comment.name}
            </h3>
            <p className='text-justify text-sm text-gray-500'>
              {comment.comment}{' '}
              <span className='text-orange-500'>...আরোও পড়ুন</span>
            </p>
          </div>
          {/* <div className='ps-3'>
                    <RiArrowRightSLine />
                  </div> */}
        </div>
      </div>
    </a>
  );
};

export default CommentCard;
