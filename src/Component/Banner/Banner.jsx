import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import PropTypes from "prop-types";


const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });
    return (
        <div>
            <>
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide number-slide1 relative">
            <img src="https://i.ibb.co/jZhmDQB/img14.jpg" alt="" className="h-4/5 w-full" />
            <div className="banner-text rounded-lg p-5 justify-start items-start absolute lg:space-y-4 space-y-2  bg-gradient-to-r from-[#313030] to-[#15151500]">
              <h2 className="lg:text-4xl text-lg font-medium">Affordable Price For Car Servicing</h2>
              <h2 className="lg:text-xl text-sm font-light text-slate-400">
                There are many variations of passages of available, <br /> but the
                majority have suffered alteration in some form
              </h2>
              <div className=" flex gap-5 justify-between">
                <div className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-warning  btn-outline ">
                  Discover More
                </div>
                <div className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-secondary  btn-outline">
                  Latest Project{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="keen-slider__slide number-slide2">
            <img src="https://i.ibb.co/FxNtDk1/img18.jpg" alt="" />
            <div className="banner-text rounded-lg p-5 justify-start items-start absolute lg:space-y-4 space-y-2  bg-gradient-to-r from-[#313030] to-[#15151500]">
              <h2 className="lg:text-4xl text-lg font-medium">Affordable Price For Car Servicing</h2>
              <h2 className="lg:text-xl text-sm font-light text-slate-400">
                There are many variations of passages of available, <br /> but the
                majority have suffered alteration in some form
              </h2>
              <div className=" flex gap-5 justify-between">
                <div className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-warning  btn-outline ">
                  Discover More
                </div>
                <div className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-secondary  btn-outline">
                  Latest Project{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="keen-slider__slide number-slide3">
            <img src="https://i.ibb.co/jZhmDQB/img14.jpg" alt="" />
            <div className="banner-text rounded-lg p-5 justify-start items-start absolute lg:space-y-4 space-y-2  bg-gradient-to-r from-[#313030] to-[#15151500]">
              <h2 className="lg:text-4xl text-lg font-medium">Affordable Price For Car Servicing</h2>
              <h2 className="lg:text-xl text-sm font-light text-slate-400">
                There are many variations of passages of available, <br /> but the
                majority have suffered alteration in some form
              </h2>
              <div className=" flex gap-5 justify-between">
                <div className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-warning  btn-outline ">
                  Discover More
                </div>
                <div className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-secondary  btn-outline">
                  Latest Project{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="keen-slider__slide number-slide4">
            <img src="https://i.ibb.co/Twm9X4L/img13.jpg" alt="" />
            <div className="banner-text rounded-lg p-5 justify-start items-start absolute lg:space-y-4 space-y-2  bg-gradient-to-r from-[#313030] to-[#15151500]">
              <h2 className="lg:text-4xl text-lg font-medium">Affordable Price For Car Servicing</h2>
              <h2 className="lg:text-xl text-sm font-light text-slate-400">
                There are many variations of passages of available, <br /> but the
                majority have suffered alteration in some form
              </h2>
              <div className=" flex gap-5 justify-between">
                <div className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-warning  btn-outline ">
                  Discover More
                </div>
                <div className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-secondary  btn-outline">
                  Latest Project{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="keen-slider__slide number-slide5">
            <img src="https://i.ibb.co/Qjp9Zpc/img19.jpg" alt="" />
            <div className="banner-text rounded-lg p-5 justify-start items-start absolute lg:space-y-4 space-y-2  bg-gradient-to-r from-[#313030] to-[#15151500]">
              <h2 className="lg:text-4xl text-lg font-medium">Affordable Price For Car Servicing</h2>
              <h2 className="lg:text-xl text-sm font-light text-slate-400">
                There are many variations of passages of available, <br /> but the
                majority have suffered alteration in some form
              </h2>
              <div className=" flex gap-5 justify-between">
                <div className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-warning  btn-outline ">
                  Discover More
                </div>
                <div className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-secondary  btn-outline">
                  Latest Project{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="keen-slider__slide number-slide6">
            <img src="https://i.ibb.co/Xp4P65f/img12.jpg" alt="" />
            <div className="banner-text rounded-lg p-5 justify-start items-start absolute lg:space-y-4 space-y-2  bg-gradient-to-r from-[#313030] to-[#15151500]">
              <h2 className="lg:text-4xl text-lg font-medium">Affordable Price For Car Servicing</h2>
              <h2 className="lg:text-xl text-sm font-light text-slate-400">
                There are many variations of passages of available, <br /> but the
                majority have suffered alteration in some form
              </h2>
              <div className=" flex gap-5 justify-between">
                <div className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-warning  btn-outline ">
                  Discover More
                </div>
                <div className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-secondary  btn-outline">
                  Latest Project{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
      {loaded && instanceRef.current && (
        <div className="dots">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            );
          })}
        </div>
      )}
    </>
        </div>
    );
};
function Arrow(props) {
    // eslint-disable-next-line react/prop-types
    const disabled = props.disabled ? " arrow--disabled" : "";
    return (
      <svg
        // eslint-disable-next-line react/prop-types
        onClick={props.onClick}
        className={`arrow ${
          // eslint-disable-next-line react/prop-types
          props.left ? "arrow--left" : "arrow--right"
        } ${disabled}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        {props.left && (
          <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        )}
        {!props.left && (
          <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
        )}
      </svg>
    );
  }

export default Banner;
Banner.propTypes = {
    disabled: PropTypes.node,
  };