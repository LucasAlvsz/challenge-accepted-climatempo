import styled from "styled-components"

export const Header = styled.header`
	width: 100%;
	height: 5rem;
	padding: 1.5rem;
	background-color: var(--color-blue-200);
	img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}

	@media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
		height: 7rem;
		display: flex;
		align-items: center;
		justify-content: start;

		img {
			width: 16rem;
			height: 100%;
		}
	}
`
