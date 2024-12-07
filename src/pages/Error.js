import { useNavigate } from "react-router-dom"

const Error = () => {

    const navigate = useNavigate();

    return (
      <>
        <div class="text-center">
          <h4 class="text-9xl font-bold text-blue-600">
            Oops! Something went wrong
          </h4>
          <p class="text-gray-500 mt-2">
            Click here {" "}
            <a style={{cursor: "pointer"}}
              onClick={() => navigate("/account-summary")}
              class="mt-6 pl-4 inline-block px-6 py-30  bg-blue-600 font-semibold rounded-md hover:bg-blue-700"
            >
              Go Home 
            </a>
            {" "} to navigate to Home
          </p>
        </div>
      </>
    );
}

export default Error