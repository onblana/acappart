import sqlite3 from "sqlite3";
import { open, Database } from "sqlite";

// 공용 DB 연결, 초기화
let db: Database | undefined;

export async function getDb() {
  if (db) return db;
  db = await open({
    filename: "src/lib/acapart.sqlite3",
    driver: sqlite3.Database,
  });
  await db.exec("PRAGMA foreign_keys = ON;");
  return db;
}
