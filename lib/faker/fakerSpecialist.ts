import { faker } from "@faker-js/faker";

import { Specialist } from "@/types/specialist";
import { Location } from "@/types/locations";

function createRandomSpecialist(): Specialist {
  const gender = faker.person.sexType();
  const firstName = faker.person.firstName(gender);
  const lastName = faker.person.lastName(gender);
  const email = faker.internet.email({ firstName, lastName });
  const username = faker.internet.userName({ firstName, lastName });

  const locations: Location[] = [
    {
      _code: "zm",
      location: "www.zoom.com",
    },
    {
      _code: "mt",
      location: "www.zoom.com",
    },
    {
      _code: "fc",
      location: faker.location.streetAddress(true),
    },
  ];

  return {
    _uid: faker.string.uuid(),
    avatar: faker.image.avatar(),
    birthday: faker.date.birthdate(),
    email,
    firstName,
    lastName,
    gender,
    username,
    phone_number: faker.phone.number(),
    price: faker.number.float({ min: 100, max: 1000, precision: 2 }),
    locations: locations,
    bussiDates: [],
    description: faker.lorem.sentence(),
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
