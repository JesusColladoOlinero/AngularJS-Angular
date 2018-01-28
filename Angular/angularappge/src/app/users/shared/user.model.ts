// export class User {
//   id: number;
//   name: string;
//   username: string;
//   email: string;
//   address: Address;
// }

// class Address {
//   steet: string;
// }

export class Data {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: User[];
}

export class User {
  id: number;
  first_name: string;
  last_name: string;
  avatar: string;
}
