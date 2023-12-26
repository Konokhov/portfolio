import {ReactNode} from 'react';
import Github from '@components/icons-components/github';

interface SocialProps {
  children: ReactNode;
}

function Social({children}: SocialProps) {
  return <div>{children}</div>;
}

Social.Github = Github;

export default Social;
