export function Input({ className = '', ...props }) {
  return <input className={`w-full border rounded-xl px-3 py-2 text-sm outline-none focus:ring focus:ring-slate-200 ${className}`} {...props} />;
}
