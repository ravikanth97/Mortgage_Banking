// import { useReducer } from "react";

// const Transaction = ({ state, dispatch }) => {
//   const initialState = {
//     sourceAccount: 0,
//     beneficiaryAccount: 0,
//     amount: 0,
//     remarks: ''
//   }
  
//   const reducer = (state: any = initialState, action: { type: any; payload: any; }) => {
//     switch (action.type) {
//       case 'SET_SOURCE':
//         return {
//           ...state,
//           sourceAccount: action.payload
//         }
//         case 'SET_DESTINATION':
//           return {
//             ...state,
//             beneficiaryAccount: action.payload
//           }
//         case 'SET_AMOUNT':
//           return {
//             ...state,
//             amount: action.payload
//           }
//         case 'SET_REMARKS':
//           return {
//             ...state,
//             remarks: action.payload
//           }
//         default:
//           return state;  
//     }
//   }

//   const setSourceAccount = (e: any) => {
//     dispatch({type: 'SET_SOURCE', payload: e.target.value})
//   } 
//   const setDestinationAccount = (e: any) => {
//     dispatch({type: 'SET_DESTINATION', payload: e.target.value})
//   } 
//   const setAmount = (e: any) => {
//     dispatch({type: 'SET_AMOUNT', payload: e.target.value})
//   } 
//   const setRemarks = (e: any) => {
//     dispatch({type: 'SET_REMARKS', payload: e.target.value})
//   } 
//   const transferFunds = (e: any) => {
//     e.preventDefault();
//     alert("Transaction successful");
//   }

//   return (
//     <form onSubmit={transferFunds}>
//       <div>
//         <div>Transaction</div>
//         <div>
//           <label>Source Account Number</label>
//           <input type="text" value={state.sourceAccount} onChange={setSourceAccount}/>
//         </div>
//         <div>
//           <label>Benificiary Account Number</label>
//           <input type="text" value={state.beneficiaryAccount} onChange={setDestinationAccount}/>
//         </div>
//         <div>
//           <label>Transaction Amount</label>
//           <input type="text" value={state.Amount} onChange={setAmount}/>
//         </div>
//         <div>
//           <label>Remarks</label>
//           <input type="text" value={state.remarks} onChange={setRemarks}/>
//         </div>
//         <div>
//           <input type="submit">Transfer Funds</input>
//         </div>
//       </div>
//     </form>
//   )
// }

// export default Transaction

const Transaction = () => {
    return (
        <>
            <div>Welcome to Funds Transfer Screen</div>
        </>
    )
}

export default Transaction