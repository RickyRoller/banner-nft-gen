import { bannerHeight, bannerWidth } from '../banner-templates/templateVars';

export const objectControlId = (id: string) => (prop: string) =>
  `${id}/${prop}`;

export const convertSVGToDataURI = async (svg: Element): Promise<string> =>
  new Promise((resolve, reject) => {
    const timeout = setTimeout(() => reject(), 2000);

    const blob = new Blob([svg.outerHTML], {
      type: 'image/svg+xml;charset=utf-8',
    });
    const blobURL = URL.createObjectURL(blob);

    const image = new Image();

    image.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = bannerWidth;
      canvas.height = bannerHeight;
      const context = canvas.getContext('2d');
      context?.drawImage(image, 0, 0, bannerWidth, bannerHeight);
      const jpg = canvas.toDataURL('image/jpg');

      clearTimeout(timeout);
      resolve(jpg);
    };

    image.onerror = () => reject();

    image.src = blobURL;
  });
