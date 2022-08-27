const Header = ({ title }: { title: string }) => {
  return (
    <div className="bg-slate-100 rounded-xl mb-7 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto py-5 px-4">
        <div className="text-center">
          <h2 className="text-sm font-semibold text-indigo-600 tracking-wide uppercase ">
            React Patterns
          </h2>
          <p className=" capitalize mt-1 text-2xl font-extrabold text-gray-900 sm:tracking-tight ">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
