import React from 'react';
import useAxios from 'axios-hooks';

export function useHeroes(searchValue) {
	const [{ data: heroes, loading: isLoadingHeroes }, searchHero] = useAxios(
		`/search/${searchValue}`,
		{ manual: true }
	);

	React.useEffect(() => {
		searchHero();
	}, []);

	return { heroes, isLoadingHeroes, searchHero };
}