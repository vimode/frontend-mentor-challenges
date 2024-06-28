import { useState } from "react";
import styles from "./NewInvoice.module.css";
import { addNewInvoice } from "@/lib/action";

function NewInvoiceForm({ handleClose }: { handleClose: () => void }) {
	// const [formData, setFormData] = useState({});

	// const handleInputChange = (e) => {
	// 	setFormData({
	// 		...formData,
	// 		[e.target.name]: e.target.value,
	// 	});
	// };

	// const handleSubmit = async (FormData) => {
	// 	console.log(FormData);
	// 	await addNewInvoice(FormData);
	// };

	return (
		<section className={styles.invoice_wrapper}>
			<h2>New Invoice</h2>
			<form
				className={styles.newinvoice_form}
				action={async (FormData) => {
					await addNewInvoice(FormData);
				}}
			>
				{/* Bill from */}
				<fieldset>
					<legend>Bill From</legend>
					<div className={styles.fwinputs}>
						<label htmlFor="street-address">Street Address</label>
						<input
							type="text"
							id="street-address"
							name="streetAddress"
							// value={formData.streetAddress}
							// onChange={handleInputChange}
						/>
					</div>
					<div className={styles.groupedinputs}>
						<div>
							<label htmlFor="city">City</label>
							<input
								type="text"
								id="city"
								name="city"
								// value={formData.city}
								// onChange={handleInputChange}
							/>
						</div>
						<div>
							<label htmlFor="post-code">Post Code</label>
							<input
								type="text"
								id="post-code"
								name="postCode"
								// value={formData.postCode}
								// onChange={handleInputChange}
							/>
						</div>
						<div>
							<label htmlFor="country">Country</label>
							<input
								type="text"
								id="country"
								name="country"
								// value={formData.country}
								// onChange={handleInputChange}
							/>
						</div>
					</div>
				</fieldset>

				{/* Bill To */}
				<fieldset>
					<legend>Bill To</legend>
					<div className={styles.fwinputs}>
						<label htmlFor="client-name">Client&apos;s Name</label>
						<input
							type="text"
							id="client-name"
							name="clientName"
							// value={formData.clientName}
							// onChange={handleInputChange}
						/>
					</div>
					<div className={styles.fwinputs}>
						<label htmlFor="client-email">Client&apos;s Email</label>
						<input
							type="email"
							id="client-email"
							name="clientEmail"
							// value={formData.clientEmail}
							// onChange={handleInputChange}
						/>
					</div>
					<div className={styles.fwinputs}>
						<label htmlFor="street-name">Street Name</label>
						<input
							type="text"
							id="street-name"
							name="streetName"
							// value={formData.streetName}
							// onChange={handleInputChange}
						/>
					</div>
					<div className={styles.groupedinputs}>
						<div>
							<label htmlFor="client-city">City</label>
							<input
								type="text"
								id="client-city"
								name="clientCity"
								// value={formData.clientCity}
								// onChange={handleInputChange}
							/>
						</div>
						<div>
							<label htmlFor="client-post-code">Post Code</label>
							<input
								type="text"
								id="client-post-code"
								name="clientPostCode"
								// value={formData.clientPostCode}
								// onChange={handleInputChange}
							/>
						</div>
						<div>
							<label htmlFor="client-country">Country</label>
							<input
								type="text"
								id="client-country"
								name="clientCountry"
								// value={formData.clientCountry}
								// onChange={handleInputChange}
							/>
						</div>
					</div>
					<div className={styles.groupedinputs}>
						<div>
							<label htmlFor="invoice-date">Invoice Date</label>
							<input
								type="date"
								id="invoice-date"
								name="invoiceDate"
								// value={formData.invoiceDate}
								// onChange={handleInputChange}
							/>
						</div>
						{/* <div> */}
						{/* 	<label htmlFor="payment-terms">Payment Terms</label> */}
						{/* 	<select */}
						{/* 		id="payment-terms" */}
						{/* 		name="paymentTerms" */}
						{/* 		// value={formData.paymentTerms} */}
						{/* 		// onChange={handleInputChange} */}
						{/* 	> */}
						{/* 		<option value="30days">Next 30 Days</option> */}
						{/* 		<option value="60days">Next 60 Days</option> */}
						{/* 		<option value="90days">Next 90 Days</option> */}
						{/* 	</select> */}
						{/* </div> */}
						<div className={styles.fwinputs}>
							<label htmlFor="project-description">Project Description</label>
							<input
								type="text"
								id="project-description"
								name="projectDescription"
								// value={formData.projectDescription}
								// onChange={handleInputChange}
							/>
						</div>
					</div>
				</fieldset>

				{/* Item List */}
				<fieldset>
					<legend>Item List</legend>
					<table>
						<thead>
							<tr>
								<th>Item Name</th>
								<th>Qty.</th>
								<th>Price</th>
								<th>Total</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<input
										type="text"
										name="itemName1"
										// value={formData.itemName1}
										// onChange={handleInputChange}
									/>
								</td>
								<td>
									<input
										type="number"
										name="itemQty1"
										// value={formData.itemQty1}
										// onChange={handleInputChange}
									/>
								</td>
								<td>
									<input
										type="number"
										step="1.0"
										name="itemPrice1"
										// value={formData.itemPrice1}
										// onChange={handleInputChange}
									/>
								</td>
								<td>156.00</td>
								<td>
									<button>del</button>
								</td>
							</tr>
							<tr>
								<td>
									<input
										type="text"
										name="itemName2"
										// value={formData.itemName2}
										// onChange={handleInputChange}
									/>
								</td>
								<td>
									<input
										type="number"
										name="itemQty2"
										// value={formData.itemQty2}
										// onChange={handleInputChange}
									/>
								</td>
								<td>
									<input
										type="number"
										step="1.0"
										name="itemPrice2"
										// value={formData.itemPrice2}
										// onChange={handleInputChange}
									/>
								</td>
								<td>400.00</td>
								<td>
									<button>del</button>
								</td>
							</tr>
						</tbody>
					</table>
					<button type="button">+ Add New Item</button>
				</fieldset>

				<div className={styles.formButtons}>
					<button onClick={handleClose} className="close-btn">
						Discard
					</button>
					<button type="button">Save as Draft</button>
					<button type="submit">Save & Send</button>
				</div>
			</form>
		</section>
	);
}

export default NewInvoiceForm;
