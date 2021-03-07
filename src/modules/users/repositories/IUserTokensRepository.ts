import UserToken from '../infra/typeorm/entities/UserToken';

export default interface IUserTokenRespository {
  generate(user_id: string): Promise<UserToken>;
  findBytoken(token: string): Promise<UserToken | undefined>;
}
