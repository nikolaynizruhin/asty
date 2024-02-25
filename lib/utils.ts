export async function getBuffer(file: File): Promise<Buffer> {
  const fileBuffer = await file.arrayBuffer();

  return Buffer.from(fileBuffer);
}

export function isEmpty(object: object): boolean {
  return Object.keys(object).length === 0
}
