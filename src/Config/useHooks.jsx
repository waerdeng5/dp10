import { modelStore } from '../Router/zustand'

export const useTemplateModel = () => {
    const { updateModel, updateModel1, updateModel2, updateModel3, updateModel4, updateModel5 } = modelStore()
    const openModel = { updateModel, updateModel1, updateModel2, updateModel3, updateModel4, updateModel5 }
    return openModel
};
