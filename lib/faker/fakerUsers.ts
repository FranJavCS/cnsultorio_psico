import { faker } from "@faker-js/faker";

import { User } from "@/lib/types/user";

function createRandomUser(): User {
  const sex = faker.person.sexType();
  const firstName = faker.person.firstName(sex);
  const lastName = faker.person.lastName();
  const email = faker.internet.email({ firstName, lastName });

  return {
    _id: faker.string.uuid(),
    avatar: faker.image.avatar(),
    birthday: faker.date.birthdate(),
    email,
    firstName,
    lastName,
    sex,
    subscriptionTier: faker.helpers.arrayElement(["free", "basic", "business"]),
  };
}

const user = createRandomUser();

const listUsers = (num: number): User[] => {
  const users: User[] = [];

  for (let i = 0; i < num; i++) {
    users.push(createRandomUser());
  }

  return users;
};

export { user, createRandomUser, listUsers };
