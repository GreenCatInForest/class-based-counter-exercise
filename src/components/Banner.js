export const Banner = ({ title, subTitle }) => {
  return (
    <div className="p-3 bg-success-subtle border border-dark border-opacity-50 text-center">
      <div className="title h1">{title}</div>
      <div className="subTitle">{subTitle}</div>
    </div>
  );
};
