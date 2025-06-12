export const GradientOut = () => {
  return (
    <div className="fixed top-0 right-0 left-0 flex justify-center">
      <div
        className="h-[125px] w-[20px]"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))",
        }}
      />
      <div
        className="h-[125px] w-[615px]"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))",
        }}
      />
    </div>
  );
};
