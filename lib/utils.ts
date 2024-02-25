import { Metadata } from "next";

export async function getBuffer(file: File): Promise<Buffer> {
  const fileBuffer = await file.arrayBuffer();

  return Buffer.from(fileBuffer);
}

export function isEmpty(object: object): boolean {
  return Object.keys(object).length === 0
}

export function addRobots(metadata: Metadata, searchParams: object) {
  if (!isEmpty(searchParams)) {
    metadata.robots = { index: false, follow: true }
  }

  return metadata;
}
