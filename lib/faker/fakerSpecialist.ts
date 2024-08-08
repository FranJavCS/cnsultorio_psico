import { faker } from "@faker-js/faker";

import { Specialist } from "@/lib/types/specialist";

function createRandomSpecialist(): Specialist {
  const sex = faker.person.sexType();
  const firstName = faker.person.firstName(sex);
  const lastName = faker.person.lastName();
  const email = faker.internet.email({ firstName, lastName });

  return {
    _uid: faker.string.uuid(),
    avatar: faker.image.avatar(),
    birthday: faker.date.birthdate(),
    email,
    firstName,
    lastName,
    sex,
    username: faker.internet.userName({ firstName, lastName }),
    phone_number: faker.phone.number(),
  };
}

const specialist = createRandomSpecialist();

const listSpecialist = (num: number): Specialist[] => {
  const data: Specialist[] = [];

  for (let i = 0; i < num; i++) {
    data.push(createRandomSpecialist());
  }

  return data;
};

export { specialist, createRandomSpecialist, listSpecialist };
