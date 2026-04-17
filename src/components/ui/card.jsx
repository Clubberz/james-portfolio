export function Card({ className = '', ...props }) {
  return <div className={`bg-white border rounded-2xl shadow-sm ${className}`} {...props} />;
}
export function CardHeader({ className = '', ...props }) {
  return <div className={`px-5 pt-5 ${className}`} {...props} />;
}
export function CardTitle({ className = '', ...props }) {
  return <h3 className={`text-xl font-semibold ${className}`} {...props} />;
}
export function CardContent({ className = '', ...props }) {
  return <div className={`px-5 pb-5 ${className}`} {...props} />;
}
