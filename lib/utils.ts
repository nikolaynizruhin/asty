import app from "@/config/app";
import { Metadata } from "next";

export async function getBuffer(file: File): Promise<Buffer> {
  const fileBuffer = await file.arrayBuffer();

  return Buffer.from(fileBuffer);
}

export function isEmpty(object: object): boolean {
  return Object.keys(object).length === 0
}

export function getSentence(text: string): string {
  return text.split('. ', 1)[0]
}

export function removeWhitespaces(text: string): string {
  return text.replace(/\s+/g, '')
}

export function addRobots(metadata: Metadata, searchParams: object): Metadata {
  if (!isEmpty(searchParams)) {
    metadata.robots = { index: false, follow: true }
  }

  return metadata;
}

export function addMetadata(text: string): string {
  return text + ' | ' + app.name
}
