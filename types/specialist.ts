import { Location } from "@/types/locations";

interface Specialist {
  _uid: string;
  avatar: string;
  birthday: Date;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  username: string;
  phone_number: string;
  price: number;
  locations: Location[];
  bussiDates: Date[];
  description: string;
}

export type { Specialist };
