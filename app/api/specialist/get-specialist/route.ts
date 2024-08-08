import { NextRequest, NextResponse } from "next/server";

import logger from "@/lib/logger";
import { specialist } from "@/lib/faker/fakerSpecialist";

export async function GET(req: NextRequest) {
  const { pathname } = new URL(req.url);

  logger.info("Inicia GET ", pathname);

  const specialistt = specialist;

  return NextResponse.json({ data: specialistt });
}
