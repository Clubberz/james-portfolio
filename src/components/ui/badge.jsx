export function Badge({ className = '', variant = 'default', ...props }) {
  const base = 'inline-flex items-center gap-1 px-2.5 py-1 text-xs rounded-full border';
  const variants = {
    default: 'bg-slate-900 text-white border-slate-900',
    secondary: 'bg-slate-100 text-slate-800 border-slate-200',
    outline: 'bg-transparent text-slate-800 border-slate-300'
  };
  return <span className={`${base} ${variants[variant]||variants.default} ${className}`} {...props} />;
}
