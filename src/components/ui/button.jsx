export function Button({ asChild, className = '', variant = 'default', ...props }) {
  const base = 'inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-lg border transition active:scale-[.99]';
  const variants = {
    default: 'bg-slate-900 text-white border-slate-900 hover:bg-slate-800',
    secondary: 'bg-slate-100 text-slate-900 border-slate-200 hover:bg-slate-200',
    outline: 'bg-transparent text-slate-900 border-slate-300 hover:bg-slate-50'
  };
  const cls = `${base} ${variants[variant] || variants.default} ${className}`;
  if (asChild && props.children?.type === 'a') {
    const A = props.children.type;
    return <A {...props.children.props} className={`${cls} ${props.children.props.className||''}`} />;
  }
  return <button className={cls} {...props} />;
}
