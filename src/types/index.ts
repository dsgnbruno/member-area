export interface Course {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  status: 'purchased' | 'locked';
  progress?: number;
  category: string;
}

export interface Coupon {
  code: string;
  discount: string;
  expiry: string;
}
