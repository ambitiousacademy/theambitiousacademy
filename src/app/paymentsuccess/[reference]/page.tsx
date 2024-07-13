export default function Paymentsuccess({ params }: { params: { reference: string } }) {

    return (
        <><div className="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">
            <div className="max-w-xl mx-auto sm:px-6 lg:px-8">
                <div className="flex items-center pt-8 sm:justify-start sm:pt-0">
                    <div className="px-4 text-lg ">
                    <p>Payment Success Payment ID:{params.reference}</p>
                    <p>Please Take A ScreenShot And You Can Close This Screen and Check Your Dashboard For Course Access.</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}