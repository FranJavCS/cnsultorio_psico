import { Locations } from "@/types/locations";

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
  locations: Locations[];
  bussiDates: Date[];
  description: string;
}

export type { Specialist };
