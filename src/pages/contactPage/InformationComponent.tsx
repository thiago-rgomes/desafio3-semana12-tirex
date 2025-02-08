interface InfoCardProps {
    imgSrc: string;
    title: string;
    children: React.ReactNode;
  }
  
  const InfoCard = ({ imgSrc, title, children }: InfoCardProps) => {
    return (
      <div className="flex items-start gap-3 p-4">
        <img src={imgSrc} alt={title} className="w-6 h-6 object-contain" />
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <div className="text-sm text-gray-600">{children}</div>
        </div>
      </div>
    );
  };
  
  export default InfoCard;
  