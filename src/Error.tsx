import { useNavigate } from "react-router-dom"

const Error = () => {

    const navigate = useNavigate();

    return (
      <>
        <div className="errorPage">
          <div>Something went wrong click here to navigate to dashboard</div>
          <div>
            <a
              className="cursor-pointer"
              onClick={() => navigate("/accountsummary")}
            > Go to DashBoard
            </a>
          </div>
        </div>
      </>
    );
}

export default Error