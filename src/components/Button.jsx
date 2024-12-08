// eslint-disable-next-line react/prop-types
export default function Button({ children, ...props }) {
  return (
    <button
      className="rounded-md border border-sky-500 bg-sky-500  hover:bg-sky-700 hover:border-sky-700 p-2 text-white"
      {...props}
    >
      {children}
    </button>
  );
}
