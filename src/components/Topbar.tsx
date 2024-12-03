import { PlusIcon } from "../assets/icons/plus";
import { ShareIcon } from "../assets/icons/share";
import { Button } from "./ui/Button";

const Topbar = ({
  setModalOpen,
}: {
  setModalOpen: (open: boolean) => void;
}) => {
  return (
    <div className="flex items-center justify-between">
      <h1 className="font-bold text-2xl tracking-wide text-zinc-600">
        All Notes
      </h1>
      <div className="flex items-center gap-4">
        <Button variant="secondary" startIcon={<ShareIcon />}>
          <span className="max-md:hidden">Share Brain</span>
        </Button>
        <Button
          variant="primary"
          startIcon={<PlusIcon />}
          onClick={() => setModalOpen(true)}
        >
          <span className="max-md:hidden">Add Content</span>
        </Button>
      </div>
    </div>
  );
};

export default Topbar;
