// app/api/callback/route.ts
import { type NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const samlResponse = formData.get("SAMLResponse");
    console.log("Duo SAML Response:", samlResponse);

    // You can decode the base64 SAML response if needed
    // const decodedSAML = Buffer.from(samlResponse as string, 'base64').toString('utf-8');
    // console.log("Decoded SAML:", decodedSAML);

    return Response.json({ status: "success" });
  } catch (error) {
    console.error("Callback error:", error);
    return Response.json(
      { error: "Failed to process callback" },
      { status: 500 },
    );
  }
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  console.log("Duo callback params:", Object.fromEntries(searchParams));

  return Response.json({ status: "success" });
}
