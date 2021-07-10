// prisma calls made specifically for creating,updating,deleting portions of the users experience
import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default handler

function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      return getExperience(req, res)
    case 'POST':
      return createExperience(req, res)
    case 'PUT':
      return updateExperience(req, res)
    case 'DELETE':
      return deleteExperience(req, res)
    default:
      return res.status(405).end(`Method ${req.method} not allowed.`)
  }
}

async function createExperience(req: NextApiRequest, res: NextApiResponse) {
  try {
    const experience = await prisma.experience.create({
      data: req.body
    })
    return res.status(200).json(experience)
  } catch (err) {
    return res.status(400).json({ message: err })
  }
}

function updateExperience(req: NextApiRequest, res: NextApiResponse) {}

function deleteExperience(req: NextApiRequest, res: NextApiResponse) {}

function getExperience(req: NextApiRequest, res: NextApiResponse) {}
