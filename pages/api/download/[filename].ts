// pages/api/download/[filename].ts
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req, res, authOptions)

  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  const { filename } = req.query

  if (typeof filename !== 'string') {
    return res.status(400).json({ error: 'Invalid filename' })
  }

  const filePath = path.join(process.cwd(), 'movies', 'files', filename)

  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ error: 'File not found' })
  }

  res.setHeader('Content-Disposition', `attachment; filename="${filename}"`)
  res.setHeader('Content-Type', 'application/octet-stream')

  const stream = fs.createReadStream(filePath)
  stream.pipe(res)
}
