export const SkeletonMovie = () => {
  return (
    <article className="animate-pulse max-w-[40rem] px-5  gap-5 flex w-full items-center sm:items-start flex-col">
      <div className="bg-gray-400 w-full h-5 rounded overflow-hidden">
        <div className="bg-white opacity-100 h-full w-5 rounded animate-skeleton-animation" />
      </div>
      <div className="bg-gray-400 w-full h-24 rounded overflow-hidden">
        <div className="bg-white h-full w-5 animate-skeleton-animation rounded" />
      </div>
    </article>
  );
};
