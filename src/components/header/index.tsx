const Header = ({ title }: { title: string }) => {
  return (
    <div className="bg-slate-100 rounded-xl mb-7">
      <div className="max-w-7xl mx-auto py-14 px-4">
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase ">
            React Patterns
          </h2>
          <p className=" capitalize mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
