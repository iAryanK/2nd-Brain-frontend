const Input = ({
  placeholder,
  type,
  reference,
}: {
  placeholder: string;
  type: string;
  reference?: any;
}) => {
  return (
    <input
      ref={reference}
      type={type}
      placeholder={placeholder}
      className="border border-purple-500 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
    />
  );
};

export default Input;
