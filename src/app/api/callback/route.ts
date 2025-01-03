// app/api/auth/callback/route.ts
import { type NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    console.log("Duo callback data:", data);

    return Response.json({ status: "success" });
  } catch (error) {
    console.error("Callback error:", error);
    return Response.json(
      { error: "Failed to process callback" },
      { status: 500 },
    );
  }
}

// Handle both POST and GET as Duo might use either
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  console.log("Duo callback params:", Object.fromEntries(searchParams));

  return Response.json({ status: "success" });
}
