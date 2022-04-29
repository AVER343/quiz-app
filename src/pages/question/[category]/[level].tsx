import React, { Suspense, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
const SurveyComponent = dynamic(() => import('../../../components/SurveyComponent'), {
	ssr: false
});

const Survey = () => {
	return <SurveyComponent />;
};
export default Survey;
