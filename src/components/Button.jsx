// eslint-disable-next-line react/prop-types
export default function Button({ children, ...props }) {
  return (
    <button className="rounded-md" {...props}>
      {children}
    </button>
  );
}
