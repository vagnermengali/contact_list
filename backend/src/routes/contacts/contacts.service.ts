import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateContactDto } from './dto/create-contacts.dto';
import { UpdateContactDto } from './dto/update-contacts.dto';
import * as PdfDocument from 'pdfkit';
import * as PdfTable from 'voilab-pdf-table';

@Injectable()
export class ContactsService {
  constructor(private prisma: PrismaService) { }

  async create(CreateContactDto: CreateContactDto, id: string) {
    const { name, email, telephone } = CreateContactDto;

    const findUser = await this.prisma.user.findUnique({
      where: {
        id,
      },
      include: {
        contacts: true,
      },
    });

    const alreadyExistingContact = findUser.contacts.find(
      (elem) => elem.name === name,
    );

    const alreadyExistingTelephone = findUser.contacts.find(
      (elem) => elem.telephone === telephone,
    );

    const alreadyExistingEmail = findUser.contacts.find(
      (elem) => elem.email === email,
    );

    if (alreadyExistingContact && alreadyExistingTelephone && alreadyExistingEmail) {
      throw new BadRequestException('This contact already exists');
    }

    if (alreadyExistingContact) {
      throw new BadRequestException('This contact name already exists');
    }

    if (alreadyExistingTelephone) {
      throw new BadRequestException('This contact number already exists');
    }

    if (alreadyExistingEmail) {
      throw new BadRequestException('This contact email already exists');
    }


    const newContact = await this.prisma.contacts.create({
      data: { ...CreateContactDto, userId: id },
    });
    return newContact;
  }

  async findOne(id: string) {
    const contact = await this.prisma.contacts.findUnique({ where: { id } });

    if (!contact) {
      throw new NotFoundException('Contact does not exists!');
    }

    return contact;
  }

  async findAllContactsByUserId(id: string) {
    const findUserWithContacts = await this.prisma.user.findUnique({
      where: {
        id,
      },
      include: {
        contacts: true,
      },
    });
    return { ...findUserWithContacts, password: undefined };
  }

  async update(id: string, updateContactDto: UpdateContactDto) {
    const { name, email, telephone } = updateContactDto;
    const contact = await this.prisma.contacts.findUnique({ where: { id } });

    if (!contact) {
      throw new NotFoundException('Contact does not exists!');
    }

    const contactUpdate = await this.prisma.contacts.update({
      where: { id },
      data: { name, email, telephone },
    });

    return contactUpdate;
  }

  async delete(id: string) {
    const deleteById = await this.prisma.contacts.findUnique({
      where: {
        id,
      },
    });

    if (!deleteById) {
      throw new NotFoundException('Contact does not exists!');
    }

    await this.prisma.contacts.delete({
      where: {
        id,
      },
    });

    return deleteById;
  }

  async findsPdf(id: string) {
    const findUserWithContacts = await this.prisma.user.findUnique({
      where: {
        id,
      },
      include: {
        contacts: true,
      },
    });
    return findUserWithContacts.contacts;
  }

}