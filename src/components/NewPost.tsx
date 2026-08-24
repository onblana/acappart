import { createPost } from "@/app/actions";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const NewPost = () => {
  return (
    <div className="">
      <div className="mb-20 w-3/4 max-w-3xl">
        <Card>
          <CardHeader>
            <CardTitle>새 글 작성</CardTitle>
          </CardHeader>
          <form action={createPost} className="flex flex-col gap-2 p-6 pt-0">
            <Textarea name="title" placeholder="글 제목" required />
            <Textarea name="content" placeholder="내용 입력..." required />
            <Button type="submit">작성하기</Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default NewPost;
