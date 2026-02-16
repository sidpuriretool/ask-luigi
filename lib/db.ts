import Database from "better-sqlite3";
import path from "path";
import fs from "fs";

const DB_DIR = path.join(process.cwd(), "data");
const DB_PATH =
  process.env.DATABASE_PATH ?? path.join(DB_DIR, "ask-luigi.db");

let db: Database.Database | null = null;

function ensureDbDir() {
  if (!fs.existsSync(DB_DIR)) {
    fs.mkdirSync(DB_DIR, { recursive: true });
  }
}

export function getDb(): Database.Database {
  if (!db) {
    ensureDbDir();
    db = new Database(DB_PATH);
    db.exec(`
      CREATE TABLE IF NOT EXISTS orders (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT NOT NULL,
        name TEXT NOT NULL,
        address TEXT NOT NULL,
        items_json TEXT NOT NULL,
        subtotal REAL NOT NULL,
        created_at TEXT DEFAULT (datetime('now'))
      )
    `);
  }
  return db;
}
