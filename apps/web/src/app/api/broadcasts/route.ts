import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Log the TechNexus event campaign to the server console
    console.log(" TechNexus Campaign Created:", body);

    // Mock successful backend response for Phase 2
    return NextResponse.json(
      {
        success: true,
        message: "Campaign created successfully for TechNexus Community!",
        campaign: {
          id: `CAMP-${Math.floor(1000 + Math.random() * 9000)}`,
          ...body,
          status: "PENDING",
          createdAt: new Date().toISOString(),
        },
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to process campaign" },
      { status: 500 }
    );
  }
}