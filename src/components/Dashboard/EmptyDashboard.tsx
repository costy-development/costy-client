const EmptyDashboard: React.FC = () => {
  return (
    <div className="empty-dashboard">
      <figure>
        <img
          src="/icons/logo.png"
          alt="costy"
          width={173}
          height={98}
          title="costy"
        />
      </figure>
      <span>DASHBOARD</span>
    </div>
  );
};

export default EmptyDashboard;
