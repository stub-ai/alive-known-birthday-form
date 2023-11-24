import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string,
  surname: string,
  dob: string
}

export let submissions: Data[] = [];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { name, surname, dob } = req.body;
  submissions.push({ name, surname, dob });
  res.status(200).json({ name, surname, dob });
}