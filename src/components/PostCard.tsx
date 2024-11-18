interface PostCardProps {
  title: string;
  body: string;
}

export function PostCard({ title, body }: PostCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start gap-4">
        <div className="flex-1">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">{title}</h2>
          <p className="text-gray-600 leading-relaxed">{body}</p>
        </div>
      </div>
    </div>
  );
}
