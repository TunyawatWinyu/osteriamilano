export interface Reservation {
  name: string;
  surname: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  person: number;
  request: string;
}

export interface FormErrors {
  name?: string;
  surname?: string;
  email?: string;
  phone?: string;
  date?: string;
  time?: string;
  person?: string;
}
