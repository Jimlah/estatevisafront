const Logo = ({ url }) => {
  return (
    <div
      className="w-6 h-6 rounded-full"
      style={{ backgroundImage: `url('${url}')` }}
    ></div>
  );
};

export default Logo;
