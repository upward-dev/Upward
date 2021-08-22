// prisma calls made specifically for creating,updating,deleting portions of the online resume
import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default handler

function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      return getProject(req, res)
    case 'POST':
      return createProject(req, res)
    case 'PUT':
      return updateProject(req, res)
    case 'DELETE':
      return deleteProject(req, res)
    default:
      return res.status(405).end(`Method ${req.method} not allowed.`)
  }
}

async function createProject(req: NextApiRequest, res: NextApiResponse) {
  try {
    const project = await prisma.project.create({
      data: req.body
    })
    return res.status(200).json(project)
  } catch (err) {
    return res.status(400).json({ message: err })
  }
}

function updateProject(req: NextApiRequest, res: NextApiResponse) {}

function deleteProject(req: NextApiRequest, res: NextApiResponse) {}

function getProject(req: NextApiRequest, res: NextApiResponse) {}
