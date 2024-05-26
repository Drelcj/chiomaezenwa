import React from 'react';
import Image from 'next/image';
import { downloadImage } from "../../utils/downloadImage";

interface MediaItemProps {
  src: string;
  alt: string;
  filename: string;
}

const MediaItem: React.FC<MediaItemProps> = ({ src, alt, filename }) => {
  const handleDownload = () => {
    downloadImage(src, filename);
  };

  return (
    <div className="media-item w-auto h-auto bg-white rounded shadow p-4">
      <Image
        className="media-item w-auto h-auto"
      src={src} alt={alt} width={300} height={300} />
      <div className="bg-white rounded shadow p-4">
      <button onClick={handleDownload} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Download</button>
      </div>
    </div>
  );
};

export default MediaItem;
