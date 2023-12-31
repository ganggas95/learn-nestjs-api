import { Exclude } from 'class-transformer';

export class UserResponse {
  id: string;
  name: string;
  username: string;

  @Exclude()
  password: string;

  constructor(partial: Partial<UserResponse>) {
    Object.assign(this, partial);
  }
}
