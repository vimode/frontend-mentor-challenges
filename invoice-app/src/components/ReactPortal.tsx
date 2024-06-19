import { useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";

function createWrapperAndAppendtoBody(wrapperId: string) {
	const wrapperElement = document.createElement("div");
	wrapperElement.setAttribute("id", wrapperId);
	document.body.appendChild(wrapperElement);
	return wrapperElement;
}

function ReactPortal({
	children,
	wrapperId,
}: { children: React.ReactNode; wrapperId: string }) {
	const [wrapperElement, setWrapperElement] = useState<HTMLElement | null>(
		null,
	);

	useLayoutEffect(() => {
		let element = document.getElementById(wrapperId);
		let modalCreated = false;
		// if element is not found with wrapperId,create and append to body
		if (!element) {
			modalCreated = true;
			element = createWrapperAndAppendtoBody(wrapperId);
		}
		setWrapperElement(element);
		return () => {
			// delete the appendeded element
			if (modalCreated && element.parentNode) {
				element.parentNode.removeChild(element);
			}
		};
	}, [wrapperId]);

	//wrapperElement state will be null on the very first render
	if (wrapperElement === null) return null;

	return createPortal(children, wrapperElement);
}

export default ReactPortal;
