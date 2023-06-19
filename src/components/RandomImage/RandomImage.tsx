import React, { useEffect, useState } from 'react';

interface Props {
  images: string[];
}

export const RandomImage: React.FC<Props> = ({ images }) => {
  const [randomImage, setRandomImage] = useState<string | null>(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * images.length);

    setRandomImage(images[randomIndex]);
  }, []);

  if (!randomImage) {
    return null;
  }

  return <img src={randomImage} alt="Random" />;
};
