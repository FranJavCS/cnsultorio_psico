import { NextRequest, NextResponse } from "next/server";

import logger from "@/lib/logger";
import { listSpecialist } from "@/lib/faker/fakerSpecialist";

export async function GET(req: NextRequest) {
  const { pathname } = new URL(req.url);

  logger.info("Inicia GET ", pathname);

  const specialist = listSpecialist(10);

  return NextResponse.json({ data: specialist });
}
