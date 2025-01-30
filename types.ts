export interface User {
  id: string;
  name: string;
  email: string;
  image?: string | null;
  isAdmin: boolean;
  posts?: Post[];
  comments?: Comment[];
}

export interface Post {
  id: string;
  createdAt: string; // Date is returned as ISO string in JSON
  slug: string;
  title: string;
  desc: string;
  img?: string | null;
  views: number;
  catSlug: string;
  cat?: Category;
  userEmail: string;
  user?: User;
  comments?: Comment[];
}

export interface Category {
  id: string;
  title: string;
  slug: string;
  posts?: Post[];
}

export interface Comment {
  id: string;
  postId: string;
  post?: Post;
  userEmail: string;
  user?: User;
  desc: string;
  createdAt: string; // Date is returned as ISO string in JSON
}
