import { z } from 'zod';

import { postPreviewSchema, postSchema } from '~/transforms';


export type IPostPreview = z.infer<typeof postPreviewSchema>
export type IPost = z.infer<typeof postSchema>
