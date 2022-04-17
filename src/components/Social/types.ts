

export interface SocialQuery {
    allGraphCmsSocialButton: {
        nodes: Array<{
            name: string
            link: string
            icon: {
                url: string
            }
        }>
    }
}
