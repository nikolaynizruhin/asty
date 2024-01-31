export async function getBuffer(file: File): Promise<Buffer> {
  const fileBuffer = await file.arrayBuffer();

  return Buffer.from(fileBuffer);
}
