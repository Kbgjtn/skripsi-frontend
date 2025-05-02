export interface TeaDisease {
  id: number;
  name: string;
  slug: string;
  description: string;
  cause?: string | null;
  image?: string;
}
