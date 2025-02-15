import styled from "styled-components"
import { ArrowUp } from "@styled-icons/bootstrap/ArrowUp"
import { ArrowDown } from "@styled-icons/bootstrap/ArrowDown"
import { Drop } from "@styled-icons/entypo/Drop"
import { UmbrellaFill } from "@styled-icons/bootstrap/UmbrellaFill"
import { CalendarDateFill } from "@styled-icons/bootstrap/CalendarDateFill"

// Icons
export const UpArrowIcon = styled(ArrowUp)``
export const DownArrowIcon = styled(ArrowDown)``
export const DropIcon = styled(Drop)``
export const UmbrellaIcon = styled(UmbrellaFill)``

// ***

export const Container = styled.div`
	width: 100%;
	height: auto;
	border-radius: 0.5rem;
	box-shadow: 0 0.3rem 0.8rem rgba(0, 0, 0, 0.3);

	@media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
		max-width: 40rem;
	}

	${UpArrowIcon}, ${DownArrowIcon}, ${DropIcon}, ${UmbrellaIcon} {
		height: 100%;
	}
`

export const UpperContainer = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: column;
	gap: 0.8rem;
	padding: 1rem;
	border-radius: 0.5rem 0.5rem 0 0;
	background-color: var(--secondary-color);

	font-size: 1.7rem;
`

export const Date = styled.div`
	width: 100%;
	height: 100%;
`

export const WeatherDescription = styled.p`
	width: 100%;
	height: 100%;
	word-wrap: break-word;

	font-size: 1.4rem;
`

export const LowerContainer = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	gap: 1.5rem;
	padding: 1rem;
`
export const Temperature = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	gap: 0 2.5rem;
`
export const Rain = styled(Temperature)``

export const Wrapper = styled.div`
	width: 100%;
	max-height: 5rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	> p {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 3rem;
	}
`

export const MaxTemperature = styled.p`
	color: var(--color-red-100);
`

export const MinTemperature = styled.p`
	color: var(--color-blue-100);
`
