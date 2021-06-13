// post user

import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";

export default async function createUser(req:NextApiRequest,res:NextApiResponse) {
    const {id} = req.query;
    let newUser = await prisma.user.create({
        data:{
            id,
            ...req.body
        }
    })
    res.send(newUser);
}