import { z } from 'zod';

import { socialSchema } from '~/transforms';


export type ISocial = z.infer<typeof socialSchema>
