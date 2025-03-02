import { SvgIcon } from '@elementor/ui';

const ResizeIcon = React.forwardRef( ( props, ref ) => {
	return (
		<SvgIcon viewBox="0 0 24 24" { ...props } ref={ ref }>
			<path fillRule="evenodd" clipRule="evenodd" stroke="none" d="M0 0h24v24H0z" fill="none"></path>
			<path fillRule="evenodd" clipRule="evenodd" d="M4 11v8a1 1 0 0 0 1 1h8m-9 -14v-1a1 1 0 0 1 1 -1h1m5 0h2m5 0h1a1 1 0 0 1 1 1v1m0 5v2m0 5v1a1 1 0 0 1 -1 1h-1"></path>
			<path fillRule="evenodd" clipRule="evenodd" d="M4 12h7a1 1 0 0 1 1 1v7"></path>
		</SvgIcon>
	);
} );

export default ResizeIcon;
