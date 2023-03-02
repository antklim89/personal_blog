import { z } from 'zod';

import { postSchema } from '~/schemas';


export type IPost = z.infer<typeof postSchema>
