"use client";

import { useQuery } from "@tanstack/react-query";

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

const fetchPosts = async (): Promise<Post[]> => {
  const res = await fetch("/api/posts");
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
};

const PostList = ({ title, description }: PostListProps) => {
  const {
    data: posts = [],
    isLoading,
    isError,
  } = useQuery({ queryKey: ["posts"], queryFn: fetchPosts });

  return (
    <div className="mb-20 w-3/4 max-w-3xl">
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          {isLoading && <p>불러오는 중...</p>}
          {isError && <p>게시글을 불러오지 못했습니다.</p>}
          {posts.map((post) => (
            <PostItem key={post.id} post={post} />
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default PostList;
