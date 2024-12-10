import { usePage } from "@inertiajs/react";
import Error from '@/Components/Error';

const ErrorPage = ({ children }) => {
  const { error } = usePage().props;

  if (error) {
    return <Error status={error} />;
  }

  return <div>{children}</div>;
};

export default ErrorPage;
