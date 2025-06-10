import Loader from "@/components/global/Loader";
import { useScrollTop } from "@/lib/utils";
import { useNewsInner } from "@/service/use-news-inner";
import { useParams } from "react-router-dom";

export default function NewsInner() {
  const { id } = useParams();

  const pageId = Number(id);
  useScrollTop(pageId);

  const { data, isPending } = useNewsInner(pageId);

  if (isPending) return <Loader />;

  return (
    <section className="pt-10 pb-20 container md:pt-28 md:pb-[120px]">
      <div className="max-w-[888px] py-5 mx-auto flex flex-col md:gap-10 gap-6">
        <div>
          <h1 className="text-on_surface md:text-[32px] text-3xl leading-10 mb-2">
            {data?.title}
          </h1>
          <h4>
            {data?.published_at.slice(0, 10).split("-").reverse().join(".")}
          </h4>
        </div>

        <div className="w-full h-[300px] md:h-[480px]">
          <img
            src={data?.featured_images[0]?.path}
            alt="news image"
            className="size-full object-cover"
          />
        </div>

        <div
          dangerouslySetInnerHTML={{ __html: data?.content ?? "" }}
          className="news-inner md:text-lg flex flex-col gap-6 text-base md:medium normal text-on_surface_v"
        />
      </div>
    </section>
  );
}
