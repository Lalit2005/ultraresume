import { NextApiRequest, NextApiResponse } from 'next/types';

export type ApiRoute = (
  req: NextApiRequest,
  res: NextApiResponse,
  data: User
) => Promise<void>;

export interface User {
  name?: string;
  email?: string;
  image?: string;
  id: string;
}

export interface NewResumeSchema {
  name: string;
  description: string;
}
