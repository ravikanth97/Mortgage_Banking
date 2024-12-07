import { useSelector } from 'react-redux';

const Savings = () => {
    const savings = useSelector(state => state.accounts.savings);

    return (
        <>
            <div>Welcome to Savings Details</div>
            <label> Savings balance: {savings.balance}</label>
            <label> Remarks: {savings.Remarks}</label>
        </>
    )
}

export default Savings