import {useMemo} from "react";

export default function FinanceMemo(){
  const transactions = [
    { id: 1, amount: 1000, type: "income" },
    { id: 2, amount: 500, type: "expense" },
    { id: 3, amount: 300, type: "income" },
    { id: 4, amount: 150, type: "expense" }
  ];

  const totalIncome = useMemo(()=>{
    return transactions.filter(transaction => transaction.type === "income").reduce((acc, item) =>{
      return acc + item.amount
    },0 )
  }, [transactions])
  console.log(totalIncome)
  return(
    <>
    <div>

    </div>
    </>
  )
}