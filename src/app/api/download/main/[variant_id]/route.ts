import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest, { params }: { params: Record<string, any> }) {
  const { variant_id } = params;
  const apiUrl = `${process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL}/store/product-media/download/${variant_id}`;

  const response = await fetch(apiUrl);

  // Check if the response is okay
  if (!response.ok) {
    return new NextResponse("Failed to fetch file data", { status: 500 });
  }

  // Check if the response has a valid JSON content type
  const contentType = response.headers.get("content-type");
  if (!contentType || !contentType.includes("application/json")) {
    return new NextResponse("Received non-JSON response", { status: 500 });
  }

  const data = await response.json();
  const { url, name, mime_type } = data;

  if (!url) {
    return new NextResponse("File doesn't exist", { status: 401 });
  }

  const imgResponse = await fetch(url);
  if (!imgResponse.ok) {
    return new NextResponse("File not found", { status: 404 });
  }

  const imgBuffer = await imgResponse.arrayBuffer();
  const headers = {
    "Content-Type": mime_type,
    "Content-Disposition": `attachment; filename="${name}"`,
  };

  return new NextResponse(imgBuffer, {
    status: 200,
    headers,
  });
}
