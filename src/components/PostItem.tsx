import Post from "@/types";

interface PostItemProps {
  key: number;
  post: Post;
}

const PostItem = ({ post }: PostItemProps) => {
  return (
    <div className="flex gap-10 mb-3">
      <span className="flex-initial">{post.category}</span>
      <span className="flex-auto w-32">{post.title}</span>
      <span className="flex-initial">{post.author}</span>
      <span className="flex-initial">{post.created}</span>
    </div>
  );
};

export default PostItem;
