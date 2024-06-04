 export default function Paymentsuccess({params} :{params: {reference: string}}){

    return (
        <>
        <h1>Payment Success</h1>
        {params.reference}
        </>
    )
}