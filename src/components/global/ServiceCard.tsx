interface IServiceCard {
  img: string;
  title: string;
  text: string;
}

const ServiceCard = ({ img, title, text }: IServiceCard) => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <div className="w-[96px] h-[96px]">
        <img src={img} alt="" className="w-full h-full object-contain" />
      </div>
      <div className="flex flex-col justify-center items-center gap-2 max-w-[298px] w-full">
        <h4 className="font-20-medium text-onAnySurface">{title}</h4>
        <p className="font-16-regular">{text}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
