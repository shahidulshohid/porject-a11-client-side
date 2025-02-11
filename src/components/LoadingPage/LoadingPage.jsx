const LoadingPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <span className="loading loading-bars loading-xs"></span>
        <span className="loading loading-bars loading-sm"></span>
        <span className="loading loading-bars loading-md"></span>
        <span className="loading loading-bars loading-lg"></span>
      </div>
    </div>
  );
};

export default LoadingPage;
