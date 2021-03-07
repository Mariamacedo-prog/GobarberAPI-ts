import ShowProfileService from './ShowProfileService';

import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import AppError from '@shared/errors/AppError';

let fakeUsersRepository: FakeUsersRepository;
let showProfileService: ShowProfileService;

describe('UpdateProfile', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();

    showProfileService = new ShowProfileService(fakeUsersRepository);
  });

  it('should be able to show the profile', async () => {
    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johndoe2@exemple.com',
      password: '123456',
    });

    const Profile = await showProfileService.execute({
      user_id: user.id,
    });

    expect(Profile.name).toBe('John Doe');
    expect(Profile.email).toBe('johndoe2@exemple.com');
  });

  it('should not be able to show the profile from non-existing user', async () => {
    expect(
      showProfileService.execute({
        user_id: ' non-existing user.id',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
