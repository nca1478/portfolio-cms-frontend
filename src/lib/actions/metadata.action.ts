'use server';

import { getMetadata } from '@/lib/api/services/metadata.service';

export async function getActiveMetadata() {
  try {
    return await getMetadata();
  } catch (error) {
    console.error('Error in metadata action:', error);
    throw error;
  }
}
