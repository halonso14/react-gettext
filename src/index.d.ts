import React from 'react';
import hoistNonReactStatic from 'hoist-non-react-statics';

import withGettext from './withGettext';
import Textdomain from './Textdomain';
import TextdomainContext from './TextdomainContext';
import buildTextdomain from './buildTextdomain';

declare module 'react-gettext';

export const Textdomain: any;
export const TextdomainContext: any;

export interface domainProps {
	gettext: Function;
	ngettext: Function;
	xgettext: Function;
	nxgettext: Function;
}

export function buildTextdomain(
	translations: string,
	plural: string
): domainProps;

export interface TextdomainInterface extends React.Component, domainProps {
	translations: any;
	plural: any;
	children: any;
	getChildContext: any;
}

export interface TextdomainContext
	extends React.Component<buildTextdomain, string> {}

export interface withGettextInterface extends TextdomainInterface {
	translations: any;
	pluralForm: any;
	children: any;
	options: any;
}

export function withGettext(
	translations: any,
	pluralForm: any,
	options: any
): (
	WithGettext: withGettextInterface,
	WrappedComponent: React.ReactElement
) => React.ComponentType<any> &
	hoistNonReactStatic.NonReactStatics<React.ComponentType<any>>;
