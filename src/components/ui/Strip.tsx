const Strip = ({
  link: { name, icon },
  active,
}: {
  link: {
    name: string;
    icon: string;
  };
  active?: boolean;
}) => {
  return (
    <div className="flex gap- justify-between text-zinc-600 cursor-pointer">
      <div className="flex items-center gap-4 ml-5">
        <img src={icon} alt={name} className="w-5 h-5" />
        <span>{name}</span>
      </div>
      <div className={`h-10 w-1 rounded-l-xl ${active && "bg-purple-800"}`} />
    </div>
  );
};

export default Strip;
