import { User } from "../entities/Users";

interface ICreateUserDTO{
    name: string;

    password: string;

    email: string;

}

interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<User>;

  findByEmail(email: string): Promise<User>;

  findById(id: string): Promise<User>;
}

export { IUsersRepository, ICreateUserDTO };
