import { PrintCommands } from "@types";
import { AggregateHelp, EntityHelp } from "@ui/help-center";
import {  ValueObjectHelp, MainHelp } from "@ui/help-center";

export const PrintHelp: PrintCommands = {
	"ddd-value-object": function (): number {
		console.log(ValueObjectHelp);
		return (0);
	},
	dvo: function (): number {
		console.log(ValueObjectHelp);
		return (0);
	},
	"rest-api": function (): number {
		console.log(MainHelp);
		return (0);
	},
	lambda: function (): number {
		console.log(MainHelp);
		return (0);
	},
	"ddd-entity": function (): number {
		console.log(EntityHelp);
		return (0);
	},
	den: function (): number {
		console.log(EntityHelp);
		return (0);
	},
	"ddd-aggregate": function (): number {
		console.log(AggregateHelp);
		return (0);
	},
	dag: function (): number {
		console.log(AggregateHelp);
		return (0);
	},
	"ddd-repository": function (): number {
		console.log(MainHelp);
		return (0);
	},
	dre: function (): number {
		console.log(MainHelp);
		return (0);
	},
	"ddd-module": function (): number {
		console.log(MainHelp);
		return (0);
	},
	dmo: function (): number {
		console.log(MainHelp);
		return (0);
	},
	"ddd-model": function (): number {
		console.log(MainHelp);
		return (0);
	},
	dmd: function (): number {
		console.log(MainHelp);
		return (0);
	},
	"ddd-adapter": function (): number {
		console.log(MainHelp);
		return (0);
	},
	dad: function (): number {
		console.log(MainHelp);
		return (0);
	},
	"ddd-event": function (): number {
		console.log(MainHelp);
		return (0);
	},
	evt: function (): number {
		console.log(MainHelp);
		return (0);
	},
	"use-case": function (): number {
		console.log(MainHelp);
		return (0);
	},
	usc: function (): number {
		console.log(MainHelp);
		return (0);
	},
	command: function (): number {
		console.log(MainHelp);
		return (0);
	},
	cmd: function (): number {
		console.log(MainHelp);
		return (0);
	},
	"web-component": function (): number {
		console.log(MainHelp);
		return (0);
	},
	wbc: function (): number {
		console.log(MainHelp);
		return (0);
	},
	microservice: function (): number {
		console.log(MainHelp);
		return (0);
	},
	mcs: function (): number {
		console.log(MainHelp);
		return (0);
	},
	"ms-client": function (): number {
		console.log(MainHelp);
		return (0);
	},
	msc: function (): number {
		console.log(MainHelp);
		return (0);
	},
	"web-app": function (): number {
		console.log(MainHelp);
		return (0);
	},
	wap: function (): number {
		console.log(MainHelp);
		return (0);
	}
}

export default PrintHelp;
