// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  data: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const id = parseInt(req.query.id as string);
  const data = id % 2 == 0 ? '✅' : '⚠️';
  res.status(200).json({ data });
}
