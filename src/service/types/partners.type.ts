export interface Partners {
  status: "success";
  data: Item[];
}

export interface Item {
  id: number;
  name: string;
  created_at: string; // ISO date string
  updated_at: string;
  order_id: number;
  image: Image;
}

export interface Image {
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
