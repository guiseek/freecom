import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model, ObjectId } from 'mongoose'
import { createHmac } from 'crypto'

import { User, UserDocument } from './schemas/user.schema'
import { UpdatePassDto } from './dto/update-pass.dto'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  create(createUserDto: CreateUserDto) {
    const createdCat = new this.userModel(createUserDto)
    return createdCat.save()
  }

  findAll() {
    return this.userModel.find().exec()
  }

  findOne(id: ObjectId) {
    return this.userModel.findById(id).select('-password')
  }

  remove(id: ObjectId) {
    return this.userModel.findByIdAndRemove(id)
  }

  update(id: ObjectId, updateUserDto: UpdateUserDto) {
    return this.userModel.updateOne({ id }, updateUserDto)
  }

  async changePass(id: ObjectId, change: UpdatePassDto) {
    const user = await this.userModel.findById(id).select('pass')
    const pass = this.encrypt(change.pass)
    if (!(user.pass === pass)) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN)
    }
    return this.updatePass(id, change.newPass)
  }

  private updatePass(id: ObjectId, newPass: string) {
    const pass = this.encrypt(newPass)
    return this.userModel.updateOne({ id }, { pass })
  }

  private encrypt(pass: string) {
    return createHmac('sha256', pass).digest('hex')
  }
}
