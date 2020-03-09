import React = require('react');
import hoistNonReactStatic = require('hoist-non-react-statics');

declare module 'react-gettext' {
	export interface ContextType {
		gettext: Function;
		ngettext: Function;
		xgettext: Function;
		nxgettext: Function;
	}

	export interface TextdomainProps {
		translations: Function | String[] | String;
		plural: Function | String;
		children?: ContextType;
	}

	export function buildTextdomain({
		translations,
		plural,
	}: TextdomainProps): ContextType;

	export interface TextdomainContext extends React.Context<ContextType> {}

	export interface Textdomain extends React.Component, TextdomainProps {}

	export interface WithGettextType extends Textdomain {}

	export function withGettext(
		{ translations, plural }: TextdomainProps,
		options: object
	): (
		WrappedComponent: React.ReactElement
	) => WithGettextType &
		hoistNonReactStatic.NonReactStatics<
			React.ComponentType<React.ReactElement>
		>;
}
