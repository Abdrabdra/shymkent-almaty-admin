// interface IHomePart {
//   value: string | null;
//   count: string;
// }
//
// interface IHomeAges {
//   range1822: number | null;
//   range2225: number | null;
//   range2530: number | null;
//   range3040: number | null;
//   range4050: number | null;
//   range5065: number | null;
//   range65: number | null;
// }
//
// export interface IHome {
//   ages: IHomeAges;
//   religions: IHomePart[];
//   genders: IHomePart[];
//   hobbies: IHomePart[];
//   status: IHomePart[];
//   cities: IHomePart[];
//   count: number;
// }

export interface IStaffResponse {
  id: number,
  firstName: string,
  secondName: string,
  iin: string,
  user: {
    phone: string,
    roles: [
      {
        id: number,
        value: string,
        description: string
      }
    ]
  }
}


export interface IOneStaffResponse {
  createdAt: string,
  updateAt: string,
  id: number,
  description: string,
  age: number,
  firstName: string,
  secondName: string,
  block: boolean,
  kids: number,
  date: string,
  iin: string,
  user: {
    id: number,
    phone: string
  },
  place: {
    id: number,
    street: string,
    floor: number,
    building: string,
    apartment: string,
    index: string
  }
}


