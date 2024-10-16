"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import ItemsList from "@/components/Form/ItemsList";
import { createNewInvoice } from "@/lib/actions";
import { generateInvoiceNumber } from "@/lib/helper";
import { InvoiceDetails } from "@/lib/types";

interface InvoiceFormProps {
	invoiceData?: InvoiceDetails;
}

export default function InvoiceForm({ invoiceData }: InvoiceFormProps) {
	const [formSubmitStatus, setFormSubmitStatus] = useState("idle");
	const [invoiceFormData, setInvoiceFormData] = useState(
		invoiceData || {
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
					total: 0,
				},
				{
					name: "",
					price: 0,
					quantity: 0,
					total: 0,
				},
			],
			total: 0,
		},
	);

	function updateFormStateValues(path: string, value: string) {
		const keys = path.split(".");
		setInvoiceFormData((prevState) => {
			let newState = { ...prevState };
			let current = newState;

			for (let i = 0; i < keys.length; i++) {
				const key = keys[i];

				if (i === keys.length - 1) {
					current[key] = value;
				} else {
					if (!current[key]) {
						current[key] = {};
					}
					current = current[key];
				}
			}

			return newState;
		});
	}

	function handleInputChange(
		e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>,
	) {
		const { name, value } = e.target;
		updateFormStateValues(name, value);
	}

	// updates the itemslist
	function handleItemsListChange(updatedItems: string) {
		updateFormStateValues("items", updatedItems);
	}

	// form submission
	async function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();

		// to avoid multiple clicks/submissions
		if (formSubmitStatus === "submitting") return;

		// generate an approprite (random) invoice number/id if it doesn't exist
		const invoiceId = invoiceFormData.id || generateInvoiceNumber();

		// grand total of all the items
		const invoiceFinalTotal = invoiceFormData.items.reduce((acc, item) => {
			return acc + item.total;
		}, 0);

		const newInvoiceData = {
			...invoiceFormData,
			id: invoiceId,
			status: "pending",
			total: invoiceFinalTotal,
		};

		const submittedInvoice = await createNewInvoice(newInvoiceData);
		if (submittedInvoice?.message === "success") {
			setFormSubmitStatus("idle");
		}
	}

	return (
		<form onSubmit={(e) => handleSubmit(e)}>
			{/* Bill from */}
			<fieldset>
				<legend>Bill From</legend>
				<div>
					<label htmlFor="street-address">Street Address</label>
					<input
						type="text"
						id="street-address"
						name="senderAddress.street"
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
							name="senderAddress.city"
							value={invoiceFormData.senderAddress.city}
							onChange={handleInputChange}
						/>
					</div>
					<div>
						<label htmlFor="post-code">Post Code</label>
						<input
							type="text"
							id="post-code"
							name="senderAddress.postCode"
							value={invoiceFormData.senderAddress.postCode}
							onChange={handleInputChange}
						/>
					</div>
					<div>
						<label htmlFor="country">Country</label>
						<input
							type="text"
							id="country"
							name="senderAddress.country"
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
						name="clientAddress.street"
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
							name="clientAddress.city"
							value={invoiceFormData.clientAddress.city}
							onChange={handleInputChange}
						/>
					</div>
					<div>
						<label htmlFor="client-post-code">Post Code</label>
						<input
							type="text"
							id="client-post-code"
							name="clientAddress.postCode"
							value={invoiceFormData.clientAddress.postCode}
							onChange={handleInputChange}
						/>
					</div>
					<div>
						<label htmlFor="client-country">Country</label>
						<input
							type="text"
							id="client-country"
							name="clientAddress.country"
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
							name="paymentDue"
							value={invoiceFormData.paymentDue}
							onChange={handleInputChange}
						/>
					</div>
					<div>
						<label htmlFor="payment-terms">Payment Terms</label>
						<select
							id="payment-terms"
							name="paymentTerms"
							value={invoiceFormData.paymentTerms}
							onChange={handleInputChange}
						>
							<option value="30days">Next 30 Days</option>
							<option value="60days">Next 60 Days</option>
							<option value="90days">Next 90 Days</option>
						</select>
					</div>
					<div>
						<label htmlFor="project-description">Project Description</label>
						<input
							type="text"
							id="project-description"
							name="description"
							value={invoiceFormData.description}
							onChange={handleInputChange}
						/>
					</div>
				</div>
			</fieldset>

			{/* Item List */}

			<ItemsList
				invoiceItemData={invoiceFormData.items}
				onItemsListChange={handleItemsListChange}
			/>
			<div>
				<button
					className="btn-basic text-text-tertiary bg-background-secondary cursor-not-allowed"
					type="button"
					disabled
				>
					Discard
				</button>
				<button
					className="btn-basic text-text-tertiary bg-background-secondary cursor-not-allowed"
					type="button"
					disabled
				>
					Save as Draft
				</button>
				<button
					className="btn-basic bg-accent text-background-secondary"
					type="submit"
				>
					Save Changes
				</button>
			</div>
		</form>
	);
}
