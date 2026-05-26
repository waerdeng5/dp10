import { create } from 'zustand'

export const menuCollapsedStore = create(set => ({
    inlineCollapsed: false,
    updateMenuCollapsed: e => set(state => ({ inlineCollapsed: e })),
}))


export const pageStore = create(set => ({
    pageActive: '',
    pageList: [],
    updateActive: e => set(state => ({ ...state, pageActive: e })),
    updateList: e => set(state => ({ ...state, pageList: e })),
}))

// 多层窗体实体层函数
export const modelStore = create(set => ({
    modelConfig: {},
    modelConfig1: {},
    modelConfig2: {},
    modelConfig3: {},
    modelConfig4: {},
    modelConfig5: {},
    updateModel: e => set(state => ({ ...state, modelConfig: e })),
    updateModel1: e => set(state => ({ ...state, modelConfig1: e })),
    updateModel2: e => set(state => ({ ...state, modelConfig2: e })),
    updateModel3: e => set(state => ({ ...state, modelConfig3: e })),
    updateModel4: e => set(state => ({ ...state, modelConfig4: e })),
    updateModel5: e => set(state => ({ ...state, modelConfig5: e }))
}))

export const fromStore = create(set => ({
    fromData: {},
    loading: false,
    updateFromData: e => set(state => ({ ...state, fromData: e })),
    updateFromLoad: e => set(state => ({ ...state, loading: e })),
}))

export const refreshStore = create(set => ({
    refresh: new Date().getTime(),
    updateRefresh: e => set(state => ({ ...state, refresh: e }))
}))

export const devChartsStore = create(set => ({
    devPivot: {},
    updateDevPivot: e => set(state => ({ ...state, devPivot: e }))
}))

