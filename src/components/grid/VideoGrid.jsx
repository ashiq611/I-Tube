import { useGetVideosQuery } from "../../features/api/apiSlice";
import VideoGridItem from "./VideoGridItem";

const VideoGrid = () => {
  const { data, isLoading, isError } = useGetVideosQuery();

  return (
    <section className="pt-12">
      <section className="pt-12">
        <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
          {data?.map((video) => (
            <VideoGridItem key={video.id} />
          ))}
          {/* <div className="col-span-12">some error happened</div> */}
        </div>
      </section>
    </section>
  );
};

export default VideoGrid;
