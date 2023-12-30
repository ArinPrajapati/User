export interface data {
  createdAt: string;
  avatar: string;
  Bio: string;
  jobTitle: string;
  profile: {
    username: string;
    firstName: string;
    lastName: string;
    email: string;
  };
  id: string;
}

export interface CardProps {
  avatar: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  jobTitle: string;
  Bio: string;
}
