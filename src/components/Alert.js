const Alert = ({ msg }) => {
  return (
    <div className="flex-1 flex items-center justify-center flex-col">
      <h1 data-cy="msg">{msg}</h1>
    </div>
  );
};

export default Alert;
