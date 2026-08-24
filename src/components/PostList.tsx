import { getDb } from "@/lib/db";

import Post from "@/types";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import PostItem from "./PostItem";

interface PostListProps {
  title: string;
  description: string;
}

const PostList = async ({ title, description }: PostListProps) => {
  const db = await getDb();
  const posts: Post[] = await db.all<Post[]>(
    "SELECT * FROM posts ORDER BY created DESC"
  );

  return (
    <div className="mb-20 w-3/4 max-w-3xl">
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          {posts.map((post) => (
            <PostItem key={post.id} post={post} />
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default PostList;
