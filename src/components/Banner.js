export const Banner = ({ title, subTitle }) => {
  return (
    <div className="p-3 bg-info bg-opacity-50 border-dark-subtle text-center">
      <div className="title h1">{title}</div>
      <div className="subTitle">{subTitle}</div>
    </div>
  );
};
