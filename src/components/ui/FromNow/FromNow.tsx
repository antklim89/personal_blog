import { Text } from '@chakra-ui/react';
import { FC } from 'react';
import { formatDistanceToNow } from 'date-fns/formatDistanceToNow'
import { FromNowProps } from './types';


const FromNow: FC<FromNowProps> = ({ date, ...props }) => {
    const formatedDate = formatDistanceToNow(new Date(date), { addSuffix: true });
    
    return (
        <Text as="span" {...props}>{formatedDate}</Text>
    );
};

export default FromNow;
