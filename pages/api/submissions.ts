import type { NextApiRequest, NextApiResponse } from 'next'

type Submission = {
  name: string,
  dob: string
}

// Mock data for the sake of this example
const submissions: Submission[] = [
  { name: 'John Doe', dob: '1990-01-01' },
  { name: 'Jane Doe', dob: '1992-02-02' },
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Submission[]>
) {
  res.status(200).json(submissions)
}