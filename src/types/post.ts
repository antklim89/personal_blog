import { postTransform, postPreviewTransform } from '~/transforms';


export type IPostPreview = ReturnType<typeof postPreviewTransform>
export type IPost = ReturnType<typeof postTransform>
