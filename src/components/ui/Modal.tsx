import { useRef, useState } from "react";
import CrossIcon from "../../assets/icons/cross";
import { Button } from "./Button";
import Input from "./Input";
import { BACKEND_URL } from "../../config";
import axios from "axios";

enum ContentType {
  youtube = "youtube",
  twitter = "twitter",
}

const Modal = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const titleRef = useRef<any>();
  const linkRef = useRef<any>();
  const [type, setType] = useState<ContentType>(ContentType.youtube);

  const handleAddContent = async () => {
    const title = titleRef.current.value;
    const link = linkRef.current.value;

    await axios.post(
      `${BACKEND_URL}/api/v1/content`,
      {
        title,
        link,
        type,
      },
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );
    onClose();
  };
  return (
    <>
      {open && (
        <div className="w-screen h-screen top-0 left-0 fixed bg-zinc-800 bg-opacity-80 flex justify-center">
          <div className="flex justify-center items-center m-22 w-full">
            <div className="bg-white rounded-lg p-5 cursor-pointer">
              <div className="flex justify-between items-center mb-5">
                <h3 className="font-bold text-zinc-700">Add Content</h3>
                <div
                  className="p-1 rounded-full hover:bg-purple-200"
                  onClick={onClose}
                >
                  <CrossIcon />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <Input placeholder="Title" type="text" reference={titleRef} />
                <Input placeholder="Link" type="text" reference={linkRef} />
                <div className="flex gap-2 w-full">
                  <Button
                    variant="secondary"
                    className="w-full"
                    onClick={() => setType(ContentType.youtube)}
                  >
                    Youtube
                  </Button>
                  <Button
                    variant="secondary"
                    onClick={() => setType(ContentType.twitter)}
                    className="w-full"
                  >
                    Twitter
                  </Button>
                </div>
              </div>
              <Button
                variant="primary"
                className="mt-5 w-full"
                onClick={handleAddContent}
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
