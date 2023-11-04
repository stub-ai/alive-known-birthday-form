import type { NextApiRequest, NextApiResponse } from 'next'
import { submissions } from './birthday';

type Submission = {
  name: string,
  dob: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Submission[]>
) {
  res.status(200).json(submissions)
}