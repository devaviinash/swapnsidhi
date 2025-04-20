export default function LoadingSpinner({ className, ...props }) {
  return (
    <div
      className={className}
      {...props}
    >
      <div className="w-16 h-16 border-4 border-saffron-200 border-t-saffron-500 rounded-full animate-spin" />
    </div>
  );
}