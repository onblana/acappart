import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/db";

import Post from "@/types";

export async function GET(_req: NextRequest): Promise<NextResponse> {
  try {
    const db = await getDb();
    const posts: Post[] = await db.all<Post[]>("SELECT * FROM posts");
    return NextResponse.json(posts);
  } catch (e) {
    console.error("DB 에러: ", e);
    return NextResponse.json(e);
  }
}

// TODO: category 컬럼이 DB에서 NOT NULL인데 INSERT에서 빠져 있어서
// 이 라우트를 호출하면 에러가 남. 지금은 글 작성이 Server Action(src/app/actions.ts)으로
// 처리되어 이 라우트가 쓰이지 않지만, 외부 API로 글 작성이 필요해지면 category도 받아서 고쳐야 함
export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const db = await getDb();
    const body = await req.json();

    const { title, content, author } = body;

    const created = new Date().toISOString();

    const result = await db.run(
      "INSERT INTO posts (title, content, author, created) VALUES (?, ?, ?, ?)",
      [title, content, author, created]
    );

    const id = result.lastID;

    return NextResponse.json(
      { id, title, content, author, created },
      { status: 201 }
    );
  } catch (e) {
    console.error("ERROR!!: ", e);
    return NextResponse.json(
      { error: "Failed to create post" },
      { status: 500 }
    );
  }
}
