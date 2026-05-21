import { NextRequest, NextResponse } from "next/server";
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
      return NextResponse.json(
        { error: "Sucessfully Loggedin" },
        { status: 200 }
      );
    
    return NextResponse.json({ error: "Invalid Credentials" }, { status: 400 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 400 });
  }
}
