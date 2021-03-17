import React from "react";
import { Button, Intent, Spinner } from "@blueprintjs/core";

export function Test() {
	return (
		<div> 
			<Spinner intent={Intent.PRIMARY} />
			<Button intent={Intent.SUCCESS}>1!!</Button>
			<Button intent={Intent.SUCCESS}>2!!</Button>
			<Button intent={Intent.SUCCESS}>3!!</Button>
			<Button intent={Intent.SUCCESS}>4!!</Button>
			<Button intent={Intent.SUCCESS}>5!!</Button>
		</div>
	);
}