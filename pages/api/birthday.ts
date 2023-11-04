import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string,
  dob: string
}

export let submissions: Data[] = [];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { name, dob } = req.body;
  submissions.push({ name, dob });
  res.status(200).json({ name, dob });
}