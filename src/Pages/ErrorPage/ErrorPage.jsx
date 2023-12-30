import { Player, } from "@lottiefiles/react-lottie-player";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
          <Player
            autoplay
            loop
            src="https://lottie.host/0d4afec1-c1dd-4c88-a176-d1ed6e724f80/FBfr3Nd9wS.json"
            // style={{ height: "500px", width: "500px" }}
            className="h-[700px] w-[900px]"

          >
            {/* <Controls
              visible={true}
              buttons={["play", "repeat", "frame", "debug"]}
            /> */}
          </Player>
          <div className="flex justify-center items-center"> <Link to={"/"} className="btn btn-outline btn-error mx-auto ">Go Back</Link></div>
          
        </div>
      );
};

export default ErrorPage;