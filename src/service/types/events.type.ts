interface Image {
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

interface Event {
  id: number;
  type: string;
  name: string;
  date: string;
  status: string;
  created_at: string;
  updated_at: string;
  order_id: number;
  banner_image: Image;
  co_organizer_image: Image;
  organizers_image: Image[];
}

export interface Events {
  status: string;
  data: Event[];
}
