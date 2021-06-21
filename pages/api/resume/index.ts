// prisma calls made specifically for creating,updating,deleting portions of the online resume
import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

export default handler;

function handler(req:NextApiRequest,res:NextApiResponse) {
  switch (req.method) {
    case 'POST':
      if (req.body.CREATE_PROJECT) {
        return createProject(req,res)
      }
      else if (req.body.CREATE_EXPERIENCE) {
        return createExperience(req,res);
      };
      return createProfile(req,res);
    case 'PUT':
      if (req.body.UPDATE_PROJECT) {
        return updateProject(req,res)
      }
      else if (req.body.UPDATE_EXPERIENCE) {
        return updateExperience(req,res);
      };
      return updateProfile(req,res);
    
    default:
      return res.status(405).end(`Method ${req.method} not allowed.`);
  }
}

async function createProject (req:NextApiRequest,res:NextApiResponse) {
  const {CREATE_PROJECT,...data} = req.body; 
  try {
    const project = await prisma.project.create({
      data
    });
    return res.status(200).json(project);
  } catch (err) {
    return res.status(400).json({message: err});
  }

}

async function updateProject(req:NextApiRequest,res:NextApiResponse) {
  const {UPDATE_PROJECT,...data} = req.body;
  try {
    const {id,...projectData} = data;
    const updatedProject = await prisma.project.update({where: {id:id},data:projectData});
    return res.status(200).json(updatedProject);
  } catch (err) {
    return res.status(400).json({message: err});
  }
}

async function createExperience(req:NextApiRequest,res:NextApiResponse) {

}

async function updateExperience(req:NextApiRequest,res:NextApiResponse){

}
async function createProfile(req:NextApiRequest,res:NextApiResponse){

}
async function updateProfile(req:NextApiRequest,res:NextApiResponse){

}
