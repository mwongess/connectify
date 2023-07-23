import "./skeleton.css";

const Skeleton = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="card w-full">
        <div className="card__skeleton card__title"></div>
        <div className="card__skeleton card__description"> </div>
      </div>
      <div className="card w-full">
        <div className="card__skeleton card__title"></div>
        <div className="card__skeleton card__description"> </div>
      </div>
      <div className="card w-full">
        <div className="card__skeleton card__title"></div>
        <div className="card__skeleton card__description"> </div>
      </div>
      <div className="card w-full">
        <div className="card__skeleton card__title"></div>
        <div className="card__skeleton card__description"> </div>
      </div>
      <div className="card w-full">
        <div className="card__skeleton card__title"></div>
        <div className="card__skeleton card__description"> </div>
      </div>
     
    </div>
  );
};

export default Skeleton;
