import { useNavigate } from "react-router-dom"

const Error = () => {

    const navigate = useNavigate();

    return (
      <>
        <div className="errorPage">
          <label style={{marginTop: "50px"}}>Something went wrong<a className="cursor-pointer" onClick={() => navigate("/accountsummary")}>
              click here
            </a> to navigate to dashboard
          </label>
        </div>
      </>
    );
}

export default Error