/* eslint-disable react/prop-types */

export default function Input({ textarea, label, error, ...props }) {
  const className = `w-full rounded-sm bg-slate-200 border border-stone-200 focus:outline-none focus:border-stone-600 text-stone-600 ${
    error ? " border-2 border-red-500" : "border-stone-200"
  }`;
  return (
    <div className="flex flex-col my-4 gap-1 w-[30rem]">
      <label className="font-bold uppercase text-sm">{label}</label>
      {textarea ? (
        <textarea className={className} {...props} />
      ) : (
        <input className={className} {...props} />
      )}
    </div>
  );
}
