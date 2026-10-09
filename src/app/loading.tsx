export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center" role="status" aria-label="Loading">
      <span className="size-1.5 rounded-full bg-accent [animation:pulse-dot_1.2s_ease-in-out_infinite]" />
    </div>
  );
}
