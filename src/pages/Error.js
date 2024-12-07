import { useNavigate } from "react-router-dom"

const Error = () => {

    const navigate = useNavigate();

    return (
      // <>
      //   <div className="errorPage">
      //     <label style={{marginTop: "50px"}}>Something went wrong<a className="cursor-pointer" onClick={() => navigate("/accountsummary")}>
      //         click here
      //       </a> to navigate to dashboard
      //     </label>
      //   </div>
      // </>

      <>
        <div className="d-flex align-items-center justify-content-center vh-50 mt-5">
          <div className="w-30">
            <h2 className="text-center">OOPS..</h2>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-center vh-50 mt-5">
          <span>
            Something went wrong
            <a
              className="cursor-pointer"
              onClick={() => navigate("/accountsummary")}
            >
              click here
            </a>{" "}
            to navigate to dashboard
          </span>
          </div>
      </>
    );
}

export default Error