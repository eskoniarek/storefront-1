import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
  // Get the file info from the URL
  const { filepath, filename } = Object.fromEntries(req.nextUrl.searchParams)

  // Fetch the PNG image
  const imgResponse = await fetch(filepath)

  // Handle the case where the PNG could not be fetched
  if (!imgResponse.ok) return new NextResponse("Image not found", { status: 404 })

  // Get the image content as a buffer
  const imgBuffer = await imgResponse.arrayBuffer()

  // Define response headers
  const headers = {
    "Content-Type": "image/png",
    "Content-Disposition": `attachment; filename="${filename}"`, // This sets the file name for the download
  }

  // Create a NextResponse with the image content and headers
  const response = new NextResponse(imgBuffer, {
    status: 200,
    headers,
  })

  return response
}
