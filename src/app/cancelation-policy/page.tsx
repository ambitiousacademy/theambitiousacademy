const PaymentAndFees = () => {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8  border-double border-4 rounded-2xl	 border-orange-600">
        <h1 className="text-4xl font-bold mb-4">Payment and Fees</h1>
        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-2">Payment</h2>
          <p>
            All payments must be made using the payment methods provided on our website. You agree to provide accurate payment information and authorize us to charge the applicable fees.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-2">Fees</h2>
          <p>
            All fees are non-refundable, except as stated in our cancellation policy.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-2">Cancellation and Refund Policy</h2>
          <p>
            We do not offer cancellation provisions or refunds except under exceptional circumstances. If you wish to request a cancellation and refund, please contact us with your reason for withdrawal.
          </p>
          <ul className="list-disc list-inside">
            <li className="mb-2">
              <strong>Contact for Withdrawal:</strong> You can contact us at <a href="mailto:support@theambitiousacademy.com" className="text-blue-500 underline">support@theambitiousacademy.com</a> with detailed reasons for your cancellation request.
            </li>
            <li className="mb-2">
              <strong>Approval:</strong> All cancellation and refund requests are subject to approval by our team.
            </li>
            <li className="mb-2">
              <strong>Deduction:</strong> If your cancellation and refund request is approved, 30% of the total amount paid will be deducted as a processing fee, and the remaining amount will be refunded to the original payment source.
            </li>
          </ul>
        </section>
      </div>
    );
  };
  
  export default PaymentAndFees;  