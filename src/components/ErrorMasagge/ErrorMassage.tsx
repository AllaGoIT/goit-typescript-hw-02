interface ErrorMasaggeProps {
  toast: {
    error: (error: string) => {};
  };
}
const ErrorMasagge: React.FC<ErrorMasaggeProps> = ({ toast }) => {
  return <>{toast.error("ERROR!")}</>;
};

export default ErrorMasagge;
