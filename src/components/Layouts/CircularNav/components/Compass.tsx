type CompassT = {};

const Compass: React.FC<CompassT> = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "rgba(255,0,0,0.5)",
          position: "absolute",
          inset: "80px",
          zIndex: 999,
          borderRadius: "100%",
        }}
      />

      <div
        style={{
          backgroundColor: "rgba(102, 255, 0, 0.5)",
          position: "absolute",
          inset: "90px",
          zIndex: 9999,
          borderRadius: "100%",
        }}
      />
      <div
        style={{
          backgroundColor: "transparent",
          border: "35px solid rgba(0,0,0,0.5)",
          position: "absolute",
          inset: "17px",
          zIndex: 9999,
          borderRadius: "100%",
        }}
      />
    </>
  );
};

export default Compass;
