import { NextRequest, NextResponse } from "next/server";

import logger from "@/lib/logger";
import { listSpecialist } from "@/lib/faker/fakerSpecialist";

const delay = (delayInms: number) => {
  return new Promise((resolve) => setTimeout(resolve, delayInms));
};

export async function GET(req: NextRequest) {
  const { pathname } = new URL(req.url);

  logger.info("Inicia GET ", pathname);

  const specialist = listSpecialist(10);

  /*   await delay(1000); */

  return NextResponse.json({ data: specialist });
}
