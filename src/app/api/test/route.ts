import { NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";

// http://localhost:3001/api/test
export async function GET() {
  try {
    await connect();
    return NextResponse.json({ message: "MongoDB connected!" });
  } catch (error) {
    return NextResponse.json({ error: "Connection failed" }, { status: 500 });
  }
}
