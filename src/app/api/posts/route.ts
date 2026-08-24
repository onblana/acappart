import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/db";
import Post from "@/types";

export async function GET(req: NextRequest): Promise<NextResponse> {
  try {
    const db = await getDb();
    const posts: Post[] = await db.all<Post[]>("SELECT * FROM posts");
    return NextResponse.json(posts);
  } catch (e) {
    console.error("DB 에러: ", e);
    return NextResponse.json(e);
  }
}

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
