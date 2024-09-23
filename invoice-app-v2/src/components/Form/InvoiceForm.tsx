"use client";

import { useState } from "react";

import ItemsList from "@/components/Form/ItemsList";

export default function InvoiceForm() {
	const [invoiceFormData, setInvoiceFormData] = useState({
		paymentDue: "",
		description: "",
		paymentTerms: 0,
		clientEmail: "",
		clientName: "",
		status: "",
		senderAddress: {
			street: "",
			city: "",
			postCode: "",
			country: "",
		},
		clientAddress: {
			street: "",
			city: "",
			postCode: "",
			country: "",
		},
		items: [
			{
				name: "",
				price: 0,
				quantity: 0,
			},
			{
				name: "",
				price: 0,
				quantity: 0,
			},
		],
		total: 0,
	});

	function handleInputChange(e) {
		console.log(e);
	}

	return (
		<form
		// action={async (FormData) => {
		// 	await addNewInvoice(FormData);
		// }}
		>
			{/* Bill from */}
			<fieldset>
				<legend>Bill From</legend>
				<div>
					<label htmlFor="street-address">Street Address</label>
					<input
						type="text"
						id="street-address"
						name="streetAddress"
						value={invoiceFormData.senderAddress.street}
						onChange={handleInputChange}
					/>
				</div>
				<div>
					<div>
						<label htmlFor="city">City</label>
						<input
							type="text"
							id="city"
							name="city"
							value={invoiceFormData.senderAddress.city}
							onChange={handleInputChange}
						/>
					</div>
					<div>
						<label htmlFor="post-code">Post Code</label>
						<input
							type="text"
							id="post-code"
							name="postCode"
							value={invoiceFormData.senderAddress.postCode}
							onChange={handleInputChange}
						/>
					</div>
					<div>
						<label htmlFor="country">Country</label>
						<input
							type="text"
							id="country"
							name="country"
							value={invoiceFormData.senderAddress.country}
							onChange={handleInputChange}
						/>
					</div>
				</div>
			</fieldset>

			{/* Bill To */}
			<fieldset>
				<legend>Bill To</legend>
				<div>
					<label htmlFor="client-name">Client&apos;s Name</label>
					<input
						type="text"
						id="client-name"
						name="clientName"
						value={invoiceFormData.clientName}
						onChange={handleInputChange}
					/>
				</div>
				<div>
					<label htmlFor="client-email">Client&apos;s Email</label>
					<input
						type="email"
						id="client-email"
						name="clientEmail"
						value={invoiceFormData.clientEmail}
						onChange={handleInputChange}
					/>
				</div>
				<div>
					<label htmlFor="street-name">Street Name</label>
					<input
						type="text"
						id="street-name"
						name="streetName"
						value={invoiceFormData.clientAddress.street}
						onChange={handleInputChange}
					/>
				</div>
				<div>
					<div>
						<label htmlFor="client-city">City</label>
						<input
							type="text"
							id="client-city"
							name="clientCity"
							value={invoiceFormData.clientAddress.city}
							onChange={handleInputChange}
						/>
					</div>
					<div>
						<label htmlFor="client-post-code">Post Code</label>
						<input
							type="text"
							id="client-post-code"
							name="clientPostCode"
							value={invoiceFormData.clientAddress.postCode}
							onChange={handleInputChange}
						/>
					</div>
					<div>
						<label htmlFor="client-country">Country</label>
						<input
							type="text"
							id="client-country"
							name="clientCountry"
							value={invoiceFormData.clientAddress.country}
							onChange={handleInputChange}
						/>
					</div>
				</div>
				<div>
					<div>
						<label htmlFor="invoice-date">Invoice Date</label>
						<input
							type="date"
							id="invoice-date"
							name="invoiceDate"
							value={invoiceFormData.paymentDue}
							onChange={handleInputChange}
						/>
					</div>
					{/* <div> */}
					{/* 	<label htmlFor="payment-terms">Payment Terms</label> */}
					{/* 	<select */}
					{/* 		id="payment-terms" */}
					{/* 		name="paymentTerms" */}
					{/* 		// value={invoiceFormData.paymentTerms} */}
					{/* 		// onChange={handleInputChange} */}
					{/* 	> */}
					{/* 		<option value="30days">Next 30 Days</option> */}
					{/* 		<option value="60days">Next 60 Days</option> */}
					{/* 		<option value="90days">Next 90 Days</option> */}
					{/* 	</select> */}
					{/* </div> */}
					<div>
						<label htmlFor="project-description">Project Description</label>
						<input
							type="text"
							id="project-description"
							name="projectDescription"
							value={invoiceFormData.description}
							onChange={handleInputChange}
						/>
					</div>
				</div>
			</fieldset>

			{/* Item List */}

			<ItemsList invoiceItemData={invoiceFormData.items} />
			<div>
				<button>Discard</button>
				<button type="button">Save as Draft</button>
				<button type="submit">Save & Send</button>
			</div>
		</form>
	);
}
