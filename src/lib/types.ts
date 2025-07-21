import { ConnectionProviderProps } from "@/providers/connection-provider";
import {z} from "zod";

export const EditUserProfileSchema=z.object({
    name:z.string().min(3,"Name must be at least 3 characters long"),
    email:z.string().email('Required')
    })

export const workFlowSchema=z.object({
    name:z.string().min(3,"Name must be at least 3 characters long"),
    description:z.string().min(3,"description must be at least 3 characters long"),
})
export type ConnectionTypes='Google Drive'|'Slack'|'Notion'|'Discord'

export type Connection={
title:ConnectionTypes,
description:string,
image:string,
connectionKey?:keyof ConnectionProviderProps,
accessTokenKey?:string,
alwaysTrue?:boolean,
slackSpecial?:boolean,
}