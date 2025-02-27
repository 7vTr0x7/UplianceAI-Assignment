export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
}

export interface UserFormData {
  name: string;
  email: string;
  phone: string;
  address: string;
}
export interface UserFormDataProps {
  setUserData: React.Dispatch<React.SetStateAction<User>>
  userData: User
}

export interface UserDetailsProps {
  count: number,
  userData: User
}