import { Outlet, Link, useNavigate } from 'react-router-dom';

const AccountSummary = () => {
    const navigate = useNavigate();
    
    const initiateTransaction = () => {
        navigate("/transaction");
    }

    return (
        <>
        <button onClick={() => initiateTransaction()}>Transfer Funds</button>
        <nav>
            <ul>
                <li> 
                    <Link  to="/savings"> Savings
                    </Link>
                </li>
                <li> 
                    <Link  to="/mortgage"> Mortgage
                    </Link>
                </li>
            </ul>
        </nav>
        <Outlet/>
        </>
    )
}

export default AccountSummary