import { NextApiRequest,NextApiResponse } from "next";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

export default function handler(req:NextApiRequest,res:NextApiResponse) {
  switch (req.method) {
    case 'GET':
      return getSomething(req,res);
    case 'DELETE':
      return deleteSomething(req,res);
    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}

/*
NOTE -- the functions below are sample functions
TODO - change the functions below to call/change the prismadb and return the corresponding data
*/
async function getSomething(req:NextApiRequest,res:NextApiResponse){
  return res.status(200).json({message:"GOT SOMETHING"});
}
async function deleteSomething(req:NextApiRequest,res:NextApiResponse) {
  return res.status(200).json({message:"DELETED SOMETHING"});
}