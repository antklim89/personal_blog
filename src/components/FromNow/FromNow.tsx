import { Text } from '@chakra-ui/react';
import { FC, useEffect, useState } from 'react';

import { FromNowProps } from './types';


const FromNow: FC<FromNowProps> = ({ date, ...props }) => {
    const [fromNowDate, setFromNowDate] = useState('');

    useEffect(() => {
        import('date-fns')
            .then(({ formatDistanceToNow }) => formatDistanceToNow(new Date(date), { addSuffix: true }))
            .then(setFromNowDate)
            .catch(console.error);
    }, [date]);

    return (
        <Text as="span" {...props}>{fromNowDate}&nbsp;</Text>
    );
};

export default FromNow;
