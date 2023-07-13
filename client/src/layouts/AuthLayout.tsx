import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className=" sm:flex sm:h-screen">
      <div className="hidden sm:block relative auth sm:w-[60%] bg-[url(/auth-left.png)] bg-center bg-no-repeat bg-cover min-h-screen">
        <div className="absolute top-0 left-0 w-full h-full bg-[#293145] bg-opacity-90">
          <div>
            <img
              className="absolute left-[50%] top-[30%]  rounded-full h-[6rem]"
              src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="absolute left-[60%] rounded-full h-[7rem]"
              src="https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-businessman-avatar-icon-flat-style-png-image_1917273.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="absolute left-[20%] top-[20%] rounded-full h-[8rem]"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjFp6xJ2Vh917-lT22d4r7ap4PXe5pwA1Zow&usqp=CAU"
              alt=""
            />
          </div>
          <div>
            <img
              className="absolute left-[30%] rounded-full h-[9rem] top-[60%]"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJHdmJmQqMPMd6WpTGICWk7lWbBvq_44sGpCpceaiPBLjxh001IaXqVZIFto6broPFwPo&usqp=CAU"
              alt=""
            />
          </div>
          <div>
            <img
              className="absolute left-[70%] top-[70%] rounded-full h-[10rem]"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGYD7w9Vl5h35OeV8Q6v0s10XmDvjpzqVY5Lt6JacLCA&s"
              alt=""
            />
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
