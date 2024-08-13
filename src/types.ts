export interface Photo {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  slug: string;
}

export interface ResponseData {
  total_pages: number;
  results: Photo[];
}
