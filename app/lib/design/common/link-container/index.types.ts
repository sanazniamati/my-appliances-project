/** @format */

type HrefObject = {
  pathname: string;
  query?: Record<string, string | string[] | undefined>;
};

export interface Props {
  href?: string | HrefObject;
  classes?: string;
  id?: string;
  children: React.ReactNode;
}
