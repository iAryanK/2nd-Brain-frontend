/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import Card from "../components/Card";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Modal from "../components/ui/Modal";
import { useContent } from "../hooks/useContent";

function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const contents = useContent();

  console.log("contents", contents);

  return (
    <main className="h-screen flex">
      <Sidebar />
      <div className="w-full bg-purple-200 p-5 space-y-5 overflow-y-scroll">
        <Topbar setModalOpen={setModalOpen} />
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {contents.map((content: any) => (
            <Card key={content._id} content={content} />
          ))}
        </div>
      </div>
      <Modal open={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}

export default Dashboard;
