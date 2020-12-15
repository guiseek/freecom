import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type UserDocument = User & Document

const options = {
  required: true,
}

@Schema()
export class User {
  @Prop(options)
  uuid: string

  @Prop(options)
  name: string

  @Prop(options)
  user: string

  @Prop(options)
  pass: string

  @Prop()
  email: string
}

export const UserSchema = SchemaFactory.createForClass(User)
