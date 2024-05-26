// utils/downloadImage.ts
import axios from 'axios';
import { saveAs } from 'file-saver';

export const downloadImage = async (url: string, filename: string): Promise<void> => {
  try {
    const response = await axios.get(url, {
      responseType: 'blob',
    });
    const blob = new Blob([response.data], { type: 'image/jpeg' });
    saveAs(blob, filename);
  } catch (error) {
    console.error('Error downloading image:', error);
  }
};
