interface Image {
  id: number;
  disk_name: string;
  file_name: string;
  file_size: number;
  content_type: string;
  title: string;
  description: string;
  field: string;
  sort_order: number;
  created_at: string;
  updated_at: string;
  path: string;
  extension: string;
}

interface TeamMember {
  id: number;
  name: string;
  job_title: string;
  biography: string;
  created_at: string;
  updated_at: string;
  order_id: number;
  image: Image;
}

export interface Team {
  status: string;
  data: TeamMember[];
}
