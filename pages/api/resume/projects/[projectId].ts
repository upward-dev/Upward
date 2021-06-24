import { NextApiRequest,NextApiResponse } from "next";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

export default function handler(req:NextApiRequest,res:NextApiResponse) {
  switch (req.method) {
    case 'GET':
      return getProjectById(req,res);
    case 'DELETE':
      return deleteProjectById(req,res);
    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}


async function getProjectById(req:NextApiRequest,res:NextApiResponse) {
  try {
    const project = await prisma.project.findUnique({where: {id:Number(req.query.projectId)}});
    return res.status(200).json(project);
  } catch (err) {
    return res.status(400).json({message:err});
  }
}
async function deleteProjectById(req:NextApiRequest,res:NextApiResponse) {
  // TODO - do something to delete the project by id based on req.query.projectId
}