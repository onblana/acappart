"use client";

// TODO: 폼 기능 완성 시 아래 훅 사용 예정
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
// TODO: 폼 기능 완성 시 아래 컴포넌트들 사용 예정
// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";

// const formSchema = z.object({ username: z.string().min(2).max(50) });

const NewPost = () => {
  // TODO: react-hook-form 연결 및 제출 시 /api/posts POST 호출 구현
  // 1. Define your form.
  // const form = useForm<z.infer<typeof formSchema>>({
  //   resolver: zodResolver(formSchema),
  //   defaultValues: {
  //     username: "",
  //   },
  // });

  // 2. Define a submit handler.
  // function onSubmit(values: z.infer<typeof formSchema>) {
  //   // Do something with the form values.
  //   // ✅ This will be type-safe and validated.
  //   console.log(values);
  // }

  return (
    <div className="">
      <div className="mb-20 w-3/4 max-w-3xl">
        <Card>
          <CardHeader>
            <CardTitle>새 글 작성</CardTitle>
          </CardHeader>
          <Textarea placeholder="글 제목" />
          <Textarea placeholder="내용 입력..." />
        </Card>
      </div>
    </div>
  );
};

export default NewPost;
