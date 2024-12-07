import { useNavigate } from "react-router-dom"

const Error = () => {

    const navigate = useNavigate();

    return (
        <>
            <div>Something went wrong click here to navigate to dashboard <a className="cursor-pointer" onClick={() => navigate("/accountsummary")}> Dashboard </a></div>
        </>
    )
}

export default Error