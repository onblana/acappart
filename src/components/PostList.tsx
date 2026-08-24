"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/Card";
import PostItem from "./PostItem";
import axios from "axios";
import { useEffect, useState } from "react";
import Post from "@/types";

interface PostListProps {
  title: string;
  description: string;
}

const PostList = ({ title, description }: PostListProps) => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    axios
      .get("/api/posts")
      .then((response) => response.data)
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div className="mb-20 w-3/4 max-w-3xl">
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          {posts.map((post, i) => (
            <PostItem key={post.id} post={post} />
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default PostList;
