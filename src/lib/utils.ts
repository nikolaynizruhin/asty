export async function getBuffer(file: File): Promise<Buffer> {
  return Buffer.from(await file.arrayBuffer());
}
