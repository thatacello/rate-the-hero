import styled from 'styled-components';
import { Box } from 'reflexbox';
import { Card } from '../../common-components/Card/Card';
import { Caption } from '../../common-components/Caption/Caption';
import { Description } from '../../common-components/Description/Description';
import { HeadingTwo } from '../../common-components/HeadingTwo/HeadingTwo';
import { ButtonLink } from '../../common-components/ButtonLink/ButtonLink';
import {
	BorderRadiuses,
	Colors,
	Shadows,
	Spaces,
} from '../../shared/DesignTokens';
import { useHero } from '../../hooks/useHero';

const InformationGrid = styled(Box)`
	display: grid;
	grid-template-columns: 1fr 70px;
	gap: ${Spaces.TWO};
`;

const HeroAvatar = styled.div`
	width: 100%;
	height: 70px;
	box-shadow: ${Shadows.ONE};
	border-radius: ${BorderRadiuses.ONE};
	background-image: url('${(props) => props.src}');
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
`;

export function HeroCard({ secretIdentity, name, picture, universe, id }) {
	const { getHeroAvaliation } = useHero();
	const heroAvaliation = getHeroAvaliation(id);

	return (
		<Card>
			<InformationGrid p={Spaces.TWO} mb={Spaces.ONE_HALF}>
				<Box>
					<Caption as="div" color={Colors.GRAY_600}>
						{secretIdentity}
					</Caption>
					<Box mb={Spaces.ONE}>
						<HeadingTwo>{name}</HeadingTwo>
					</Box>
					<Description as="div" color={Colors.GRAY_700}>
						<strong>Universo:</strong> {universe}
					</Description>
					<Description as="div" color={Colors.GRAY_700}>
						<strong>Nota atual:</strong>{' '}
						{heroAvaliation?.avaliation || '-'}
					</Description>
				</Box>
				<HeroAvatar src={picture} />
			</InformationGrid>
			<Box width="87px">
				<ButtonLink to={`/detalhes/${id}`}>Ver Mais</ButtonLink>
			</Box>
		</Card>
	);
}