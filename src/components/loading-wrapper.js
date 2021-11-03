import React from 'react';
import Loader from 'components/common/loader';
import Root from 'components/root';
import { firstLoadingState } from 'components/state/loading';
import { useRecoilState } from 'recoil';

const LoadingWrapper = () => {
	const [loading] = useRecoilState(firstLoadingState);
	if (loading) return <Loader />;
	
	return <Root />;
};

export default LoadingWrapper;
