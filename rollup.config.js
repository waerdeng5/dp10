import dynamicImportVars from '@rollup/plugin-dynamic-import-vars'

export default {
    plugins: [
        dynamicImportVars({
            include: [
                './page/*.jsx',
                '../page/*.jsx',
                './home/*.jsx',
                '../home/*.jsx',
                './theme/*.jsx',
                '../Page/Loading/*.jsx',
                '../../Page/Loading/*.jsx',
            ]
        })
    ]
}