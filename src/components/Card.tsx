import { ShareIcon } from "../assets/icons/share";
import { TrashIcon } from "../assets/icons/trash";
import { BACKEND_URL } from "../config";

export interface CardProps {
  content: {
    _id: string;
    title: string;
    link: string;
    type: "twitter" | "youtube";
  };
}

const Card = ({ content }: CardProps) => {
  const cardTypeImg =
    content.type === "twitter" ? "./twitter.svg" : "./youtube.svg";

  const handleShare = () => {
    navigator.clipboard.writeText(content.link);
    alert("Link copied to clipboard");
  };

  const handleDelete = async () => {
    await fetch(`${BACKEND_URL}/api/v1/content`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(content._id),
    });
    alert("Deleted");
  };

  return (
    <div className="p-5 rounded-xl border max-w-sm max-h-96 overflow-y-scroll space-y-3 hover:shadow-xl transition-all duration-200 ease-in-out bg-white shrink-0">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img src={cardTypeImg} alt="document icon" className="w-5 h-5" />
          <div className="ml-3 font-medium">{content.title}</div>
        </div>
        <div className="flex items-center gap-1">
          <div
            className="cursor-pointer p-2 hover:bg-purple-200 rounded-full duration-300 transition-all ease-in-out"
            onClick={handleShare}
          >
            <ShareIcon />
          </div>
          <div
            className="cursor-pointer p-2 hover:bg-purple-200 rounded-full duration-300 transition-all ease-in-out"
            onClick={handleDelete}
          >
            <TrashIcon />
          </div>
        </div>
      </div>
      {/*content.type==="text" && <div className="font-semibold">Future Projects</div>
      <div className="font-light text-sm">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa dolore
      </div> */}

      {content.type === "youtube" && (
        <iframe
          className="w-full rounded-xl"
          height="215"
          src={content.link}
          title={content.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      )}

      {content.type === "twitter" && (
        <blockquote className="twitter-tweet">
          <a href={content.link}></a>
        </blockquote>
      )}

      <div className="flex items-center gap-2">
        <div className="bg-purple-300 rounded-xl p-1 px-2 text-xs font-light tracking-wide hover:bg-purple-300/80">
          #productivity
        </div>
      </div>
      <div className="text-xs text-zinc-600">Added on 11/10/2005</div>
    </div>
  );
};

export default Card;
