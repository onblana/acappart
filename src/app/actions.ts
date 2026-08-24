"use server";

import { revalidatePath } from "next/cache";
import { getDb } from "@/lib/db";

export async function createPost(formData: FormData) {
  const title = formData.get("title");
  const content = formData.get("content");

  if (typeof title !== "string" || typeof content !== "string") return;
  if (!title.trim() || !content.trim()) return;

  // TODO: 로그인 기능 추가 시 author를 실제 사용자 정보로 교체
  // TODO: 카테고리 선택 UI 추가 시 "자유" 하드코딩 제거하고 formData에서 받아오기
  const db = await getDb();
  await db.run(
    "INSERT INTO posts (category, title, content, author, created) VALUES (?, ?, ?, ?, ?)",
    ["자유", title, content, "익명", new Date().toISOString()]
  );

  revalidatePath("/", "layout");
}
