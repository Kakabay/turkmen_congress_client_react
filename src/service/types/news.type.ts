interface FeaturedImage {
  id: number;
  disk_name: string;
  file_name: string;
  file_size: number;
  content_type: string;
  title: string | null;
  description: string | null;
  field: string;
  sort_order: number;
  created_at: string;
  updated_at: string;
  path: string;
  extension: string;
}

export interface NewsData {
  id: number;
  title: string;
  content: string;
  published_at: string;
  featured_images: FeaturedImage[];
}

interface Pagination {
  total: number;
  per_page: number;
  current_page: number;
  last_page: number;
}

export interface NewsType {
  status: string;
  data: NewsData[];
  pagination: Pagination;
}

export interface NewsInnerType {
  status: string;
  data: Data;
}

interface Data {
  id: number;
  title: string;
  content: string;
  published_at: string;
  featured_images: InnerFeaturedImage[];
  translations: any[];
}

interface InnerFeaturedImage {
  id: number;
  disk_name: string;
  file_name: string;
  file_size: number;
  content_type: string;
  title: null;
  description: null;
  field: string;
  sort_order: number;
  created_at: Date;
  updated_at: Date;
  path: string;
  extension: string;
}
