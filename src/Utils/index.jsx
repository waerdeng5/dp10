import dayjs from 'dayjs'
import { GetIndexedDB, IndexedDBClear, PutIndexedDB } from './IndexedDB'


// TODO 判断浏览器版本
export const judgeBrowserVersion = () => {
    const browserVersions = { Chrome: 93, Safari: 530, Firefox: 92, Opera: 80 }
    const { userAgent } = window.navigator
    const webList = userAgent.split(' ').filter(v => v.indexOf('/') !== -1 && v.indexOf('Mozilla') === -1 && v.indexOf('AppleWebKit') === -1)
    let currentVersions = {}
    for (const key of webList) {
        const [keyName, value] = key.split('/')
        currentVersions[keyName] = parseInt(value)
    }
    return Object.keys(browserVersions).every(key => {
        if (currentVersions[key] && browserVersions[key]) { return currentVersions[key] >= browserVersions[key] }
        return true
    })
}

// TODO Debug函数
export const debuggerFun = () => {
    const block = () => {
        if (window.outerHeight - window.innerHeight > 50 || window.outerWidth - window.innerWidth > 50) {
            document.body.innerHTML = "检测到非法调试!";
            sessionStorage.clear()
            localStorage.clear()
            IndexedDBClear()
        }
        setInterval(() => {
            (function () { return false }
            // eslint-disable-next-line no-unexpected-multiline
            ['constructor']('debugger')
            // eslint-disable-next-line no-unexpected-multiline
            ['call']())
        }, 50)
    }
    try { block() } catch (err) { /* empty */ }
}


// Todo 获取树中某一字段的详细信息
export const treeValue = (tree, value, key = 'uuid') => {
    for (let i = 0; i < tree.length; i++) {
        if (tree[i][key] === value) {
            return tree[i]
        } else if (tree[i].children && tree[i].children.length) {
            const result = treeValue(tree[i].children, value, key)
            if (result) return result
        }
    }
    return null
}
// Todo 获取对象数组中某一段的详细信息
export const objectArrValue = (arr, value, key = 'uuid') => {
    return arr.find(obj => obj[key] === value);
}
// Todo 判断某一个字段是否在对象数组中
export const objectArrHas = (arr, value, key = 'uuid') => {
    return arr.some(obj => obj[key] === value);
}

// Todo Form表单时间处理后函数(提交时触发)
export const formTempDateHandleBefore = (format, date) => {
    return dayjs(date).format('YYYY-MM-DD HH:mm:ss')
}

// Todo 字符换转换请求体对象
export const stringToObject = (str) => {
    const newStr = str ? str
        .split('&')
        .map(pair => pair.split('='))
        .map(([key, value]) => [decodeURIComponent(key), decodeURIComponent(value)])
        .reduce((obj, [key, value]) => {
            obj[key] = value
            return obj
        }, {}) : ''
    return newStr
}


// Todo 用key获取指定数据
export const findDataByKey = (object, value, key = 'uuid') => {
    for (const date in object) {
        const events = object[date]
        for (const event of events) { if (event[key] === value) { return event } }
    }
    return null
}
// Todo 用key替换指定对象的值
export const replaceDataByKey = (data, newEvent, value, key = 'uuid') => {
    for (let i = 0; i < data.length; i++) {
        if (data[i][key] === value) data[i] = newEvent
    }
    return data;
}
// Todo 用key删除指定对象
export const deleteDateByKey = (data, value, key = 'uuid') => {
    for (let date in data) {
        const events = data[date]
        data[date] = events.filter(event => event[key] !== value)
    }
    return data
}

// Todo 根据 key 替换树形结构的指定值
export const updateTreeByKey = (tree, uuid, newData, key = 'uuid', value = 'label') => {
    for (const item of tree) {
        if (item[key] === uuid) item[value] = newData
        if (item.children) updateTreeByKey(item.children, uuid, newData, key, value);
    }
}
// Todo 根据 key 合并树形数组中的对象
export const replaceNodeById = (tree, targetId, newNode, key = 'uuid') => {
    function traverse(node) {
        if (node[key] === targetId) {
            Object.assign(node, newNode)
            return
        }
        if (node.children && node.children.length > 0) {
            node.children.forEach(child => traverse(child));
        }
    }
    tree.forEach(rootNode => traverse(rootNode));
    return tree
}

// Todo 根据 key 替换树形数组中的对象
export const replaceNodeByIdTwo = (tree, targetId, newNode, key = 'uuid') => {
    let found = false;
    function traverse(nodes) {
        for (let i = 0; i < nodes.length; i++) {
            if (nodes[i][key] === targetId) {
                nodes[i] = newNode;
                found = true;
                return true;
            }
            if (nodes[i].children && nodes[i].children.length > 0) {
                if (traverse(nodes[i].children)) return true
            }
        }
        return false;
    }
    const newTree = [...tree]
    traverse(newTree)
    if (!found) console.warn(`Node with ${key} = ${targetId} not found`)
    return newTree;
}




// Todo 根据 key 删除树形结构中的对象
export const removeTreeByKey = (obj, value, key = 'uuid') => {
    return obj.filter(item => {
        if (item.children) item.children = removeTreeByKey(item.children, value, key)
        return item[key] !== value
    })
}

export const getTreeKeysTwo = (tree, key = 'key') => {
    const keys = []
    const traverse = (tree) => {
        if (tree.children && tree.children.length > 0) {
            if (tree[key] !== undefined) keys.push(tree[key])
            tree.children.forEach(child => traverse(child))
        }
    }
    tree.forEach(node => traverse(node))
    return keys
}

// Todo 树形根据子级字段找父级
export const findParentByChildPath = (routers, childPath, key = 'uuid') => {
    for (const router of routers) {
        if (router.children) {
            const foundChild = router.children.find(child => child[key] === childPath)
            if (foundChild) {
                return router;
            }
        }
    }
    return null;
}
// TODO 判断树形数组是否包含指定值
export const findInTree = (data, callback, children = 'children') => {
    for (let i = 0; i < data.length; i++) {
        const node = data[i];
        if (callback(node)) return true
        if (node[children] && Array.isArray(node[children])) {
            if (findInTree(node[children], callback)) return true
        }
    }
    return false;
}




// Todo 平分数组 根据状态判断两侧权重
export const splitArrayEvenly = (arr, firstGroupGetsExtra = true) => {
    const length = arr.length;
    const halfLength = Math.floor(length / 2);
    let firstGroup, secondGroup;

    if (length % 2 === 0) {
        firstGroup = arr.slice(0, halfLength);
        secondGroup = arr.slice(halfLength);
    } else {
        if (firstGroupGetsExtra) {
            firstGroup = arr.slice(0, halfLength + 1);
            secondGroup = arr.slice(halfLength + 1);
        } else {
            firstGroup = arr.slice(0, halfLength);
            secondGroup = arr.slice(halfLength);
        }
    }
    return [firstGroup, secondGroup];
}




// Todo 删除对象控制
export const removeObjectEmpty = (obj) => {
    return Object.fromEntries(
        Object.entries(obj).filter(([key, value]) => {
            return value !== null && value !== undefined && value !== '' && !Array.isArray(value) || value?.length > 0;
        })
    )
}

// Todo 删除多想多个键
export const removeObjectObj = (obj1, obj2) => {
    const entries = Object.entries(obj1).filter(([key]) => !obj2.hasOwnProperty(key));
    return Object.fromEntries(entries);
}

// Todo 根据url尾缀判断文件类型
export const getFileTypeFromUrl = (url) => {
    const parts = url.split('.')
    const extension = parts.at(-1).toLowerCase()
    switch (extension) {
        case 'jpg': case 'jpeg': case 'png': case 'gif': case 'bmp': case 'svg': return 'image'
        case 'mp4': case 'avi': case 'mov': case 'mkv': return 'video'
        case 'pdf': return 'pdf'
        case 'doc': case 'docx': return 'word'
        case 'xls': case 'xlsx': return 'excel'
        case 'md': return 'md'
        case 'txt': return 'txt'
        case 'ppt': case 'pptx': return 'edge'
        default: return 'not'
    }
}

// Todo 获取树形数据的所有指定值并返回一维数据
export const getTreeKeys = (tree, key = 'key', children = 'children') => {
    const keys = []
    const traverse = (tree) => {
        if (tree[key] !== undefined) keys.push(tree[key])
        if (tree.children && tree.children.length > 0) tree.children.forEach(child => traverse(child))
    }
    tree.forEach(node => traverse(node))
    return keys
}

// Todo 一维数组转二维
export const oneArrToTwoArr = (data, condition, status = 'status') => {
    const tasksMap = data.reduce((acc, item) => {
        if (acc[item[status]]) {
            acc[item[status]].push(item);
        } else {
            acc[item[status]] = [item];
        }
        return acc;
    }, {})
    return condition.map((status) => tasksMap[status] || []);
}

// Todo 对比数组 返回多余字段
export const findExtraItemsByUuid = (array1, array2, key = 'uuid') => {
    return array1.filter(item1 => !array2.some(item2 => item2[key] === item1[key]))
}





// Todo 数据层级取值
export const getNestedValue = (hierarchy, res) => {
    if (!hierarchy) return res
    if (typeof hierarchy !== 'string' || typeof res !== 'object' || res === null) {
        // console.error('无效输入：层级应为字符串，res应为对象。')
        return undefined
    }
    const keys = hierarchy.split('.')
    let currentData = res
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i]
        if (currentData.hasOwnProperty(key)) {
            currentData = currentData[key]
        } else {
            console.error(`"${key}" 未在对象中找到。`)
            return undefined
        }
    }

    return currentData
}

// Todo 树形数组模糊搜索
export const fuzzySearch = (tree, searchTerm, key = 'name') => {
    function searchNode(node) {
        if (node[key] && node[key].toLowerCase().includes(searchTerm.toLowerCase())) {
            return { ...node, children: node.children ? node.children.map(searchNode).filter(Boolean) : [] }
        }
        if (node.children && node.children.length > 0) {
            const matchedChildren = node.children.map(searchNode).filter(Boolean);
            if (matchedChildren.length > 0) { return { ...node, children: matchedChildren } }
        }
        return null;
    }
    const newTree = tree.map(searchNode).filter(Boolean)
    return newTree
}


export const dataToFormData = (data) => {
    const formData = new FormData()
    for (const key in data) {
        if (data.hasOwnProperty(key)) formData.append(key, data[key])
    }
    return formData
}

// Todo 获取接口数据值
export const getApiDataOfString = (obj, path) => {
    const keys = path.split(/[.]/)
    let current = obj
    for (let key of keys) {
        if (current && typeof current === 'object' && key in current) current = current[key]
        else return undefined
    }
    return current
}

// Todo 根据group将数组组装成树形结构
export const arrayToTree = (data) => {
    const map = {};
    const tree = [];
    data.forEach(item => {
        const newItem = { ...item, children: [] };
        map[item.name] = newItem;
    });
    data.forEach(item => {
        if (item.group) {
            const parent = map[item.group]
            if (parent) {
                parent.children.push(map[item.name])
            }
        }
    });

    data.forEach(item => {
        if (!item.group) {
            tree.push(map[item.name])
        }
    });
    return tree;
}


export const ConditionalJudgment = (value, judge) => {
    const operator = judge.match(/[><=!]=?/)[0];
    const target = parseFloat(judge.replace(/[><=!]=?/, ''))
    switch (operator) {
        case '>': return value > target;
        case '<': return value < target;
        case '==': return value == target;
        case '===': return value == target;
        case '!=': return value != target;
        case '!==': return value != target;
        case '>=': return value >= target;
        case '<=': return value <= target;
        default: return false;
    }
}

// Todo 两个数组进行组装 / 多用于charts表格数据组装
export const ChartsAssembleArray = (A01, A02) => {
    return A01.flatMap(item => (A02.map(({ name, type, value }) => ({ name, type: item[type], value: item[value] }))))
}

// Todo 饼图数据组装
export const ChartsPieArray = (A01, A02) => {
    return A01.map(item => ({ type: item.type, value: A02[item.value], color: item.color }))
}

// Todo 字符串组合成数组 
export const T01ToArray = (A01, A02, A03, data) => {
    const a01 = A01.split(',')
    const a02 = A02.split(',')
    const a03 = A03.split(',')
    return a01.map((_, i) => ({ type: a01[i], value: data[a02[i]], color: a03[i] }))
}

// Todo 导航拆分
export const NavigationRecombination = (router, weight) => {
    const data = router.filter(v => v.key !== 'Home')
    const length = data.filter(v => v.key !== 'Home').length
    const middleIndex = Math.ceil(length / 2)
    if (weight === 'left') {
        const firstHalf = data.slice(0, middleIndex);
        const secondHalf = data.slice(middleIndex);
        return [firstHalf, secondHalf];
    } else {
        const firstPartLength = Math.floor(length / 2);
        const firstHalf = data.slice(0, firstPartLength);
        const secondHalf = data.slice(firstPartLength);
        return [firstHalf, secondHalf];
    }
}

// Todo 向多维对象数组中的指定下标内追加新的对象
export const appendObjectToMultiDimensionalArray = (arr, outerIndex, newObj) => {
    if (arr[outerIndex]) arr[outerIndex].push(newObj)
    else arr[outerIndex] = [newObj]
    return arr
}

export const numberFormatting = (type, data) => {
    const typeMapping = { f: 'fixedPoint', d: 'decimal', p: 'percent', c: 'currency' }
    if (!data || type !== 'number') return data
    const parts = data.match(/^([a-zA-Z])(\d+)$/)
    if (!parts) return data
    const [_, prefix, numStr] = parts
    const formatType = typeMapping[prefix.toLowerCase()]
    if (!formatType) return data
    const precision = Number.parseInt(numStr, 10)
    if (Number.isNaN(precision)) return data
    return prefix.toLowerCase() === 'c' ?
        { style: "currency", currency: "CNY", useGrouping: true, precision } :
        { type: formatType, precision }
}

// 表单参数颜色值判断
export const convertMetaColorToHex = (obj) => {
    function traverse(currentObj) {
        if (typeof currentObj !== 'object' || currentObj === null || Array.isArray(currentObj)) return currentObj
        if (currentObj.hasOwnProperty('cleared') && currentObj.hasOwnProperty('metaColor')) {
            const { colors, metaColor } = currentObj
            if (colors) {
                const color = colors.map(item => {
                    const { r, g, b, a } = item.color.metaColor
                    return ({ color: `rgba(${r}, ${g}, ${b}, ${a})`, percent: item.percent })
                })
                return color
            } else {
                const { r, g, b, a } = metaColor
                return `rgba(${r}, ${g}, ${b}, ${a})`
            }
        }
        for (const key in currentObj) currentObj[key] = traverse(currentObj[key])
        return currentObj
    }
    return traverse(obj)
}

// TODO 颜色处理
export const ColorCallBack = (color, deg = '90') => {
    if (typeof (color) === 'string') return color
    return `linear-gradient(${deg}deg,${color?.map(item => (`${item.color} ${item.percent}%`)).join(',')})`
}

// TODO 内外间距
export const SpacingCallBack = (spacing) => {
    return String(spacing).split(',').map(num => num + 'px').join(' ')
}
// TODO 外间距数值处理
export const SpacingSizeCallBack = (spacing, size, type) => {
    const str = String(spacing).split(',').map(item => (Number(item)))
    let spac = 0
    if (str.length === 1) spac = str[0] * 2
    if (str.length === 2 || str.length === 3) spac = type ? str[0] * 2 : str[1] * 2
    if (str.length === 4) spac = type ? str[0] + str[2] : str[1] + str[3]
    return `calc(${size}% - ${spac}px)`
}

// TODO 边框参数
export const SetBorderParams = (status, size, type, color) => {
    if (status) return `${size}px ${type} ${color}`
    return 'none'
}

// TODO 阴影参数
export const SetFilderParams = (status, size, color) => {
    if (status) {
        const [x, y, z] = size.split(',')
        return `drop-shadow(${x}px ${y}px ${z}px ${color})`
    }
    return null
}

// TODO 数据组装A01
export const assembleDataA01 = (configuration, apiData) => {
    const { data_apiName, data_dataLevel, data_dataType, data_obj, data_arr = [], data_describe, data_field } = configuration
    const [urlList] = apiData.filter(v => v.name === data_apiName)
    const data = getNestedValue(data_dataLevel, urlList)
    if (data_dataType === 'array') {
        const arr = data.map(item => {
            const array = ({ value: item[data_field], label: item[data_describe] })
            const find = data_arr.find(v => v.field === item[data_describe])
            if (find) {
                array.color = find.fill
                array.unit = find.unit
                if (find.iconAimage === 'icon') array.icon = find.icon
                if (find.iconAimage === 'img') array.image = find.image
            }

            return array
        })
        return arr
    }
    if (data_dataType === 'object') {
        const arr = data_obj.map(item => ({
            value: data[item.field],
            label: item.describe,
            color: item.fill,
            unit: item.unit,
            icon: item.icon,
            image: item.image,
        }))
        return arr
    }
}



// TODO 权限过滤
export const filterTreeData = (nodes = [], uuids) => {
    return nodes.filter(node => {
        if (uuids.includes(node.uuid)) {
            if (node.children) {
                node.children = filterTreeData(node.children, uuids)
            }
            return true;
        }
        return false;
    })
}

// TODO 数组合并去重
export const mergeAndDeduplicate = (arr1, arr2, key = 'uuid') => {
    const uuidMap = new Map();
    [...arr1, ...arr2].forEach(item => {
        uuidMap.set(item[key], item);
    });
    return [...uuidMap.values()];
}

// TODO 判断两个数组中的不同部分 返回新数组
export const getDifferentObjectsOptimized = (arr1, arr2, key = 'uuid') => {
    const uuidSet1 = new Set(arr1.map(item => item[key]))
    const uuidSet2 = new Set(arr2.map(item => item[key]))

    const result = [];
    for (let item of arr1) {
        if (!uuidSet2.has(item[key])) result.push(item);
    }
    for (let item of arr2) {
        if (!uuidSet1.has(item[key])) result.push(item);
    }

    return result;
}

// TODO 返回数组一 中不存在数组二的元素
export const getDiffObjects = (arr1, arr2, key = 'uuid') => {
    const uuidSet2 = new Set(arr2.map(item => item[key]))
    return arr1.filter(item => !uuidSet2.has(item[key]))
}


export const setVChartsFields = (direction, group) => {
    let xField, yField
    if (direction === 'vertical') {
        xField = group ? ['xField', 'seriesField'] : 'xField'
        yField = 'yField'
    } else {
        xField = 'yField'
        yField = group ? ['xField', 'seriesField'] : 'xField'
    }
    return { xField, yField }
}

export const setVChartsFieldsA02 = (direction) => {
    if (direction === 'vertical') return { xField: 'xField', x2Field: 'x2Field', yField: 'yField', seriesField: 'seriesField' }
    else return { xField: 'yField', yField: 'xField', y2Field: 'x2Field', seriesField: 'seriesField' }
}

export const setVChartsFieldsA03 = (direction) => {
    if (direction === 'vertical') return { xField: 'seriesField', yField: ['xField', 'yField'] }
    else return { xField: ['xField', 'yField'], yField: 'seriesField' }
}
// 树形组件的拖动函数
export const onTreeDrop = (info, TreeData, key = 'key') => {
    const data = [...TreeData]
    const dropKey = info.node[key];
    const dragKey = info.dragNode[key];
    const dropPos = info.node.pos.split('-');
    const dropPosition = info.dropPosition - Number(dropPos[dropPos.length - 1])
    let dragObj
    const loop = (data, dragKey, callback) => {
        for (let i = 0; i < data.length; i++) {
            if (data[i][key] === dragKey) return callback(data[i], i, data)
            if (data[i].children) loop(data[i].children, dragKey, callback)
        }
    }
    loop(data, dragKey, (item, index, arr) => { arr.splice(index, 1); dragObj = item })
    if (!info.dropToGap) {
        loop(data, dropKey, (item) => {
            item.children = item.children || []
            item.children.unshift(dragObj)
        });
    } else {
        let ar = [], i
        loop(data, dropKey, (_item, index, arr) => { ar = arr; i = index });
        if (dropPosition === -1) ar.splice(i, 0, dragObj)
        else ar.splice(i + 1, 0, dragObj)
    }
    return data
}

// TODO 对象深度合并
const isObject = (value) => typeof value === 'object' && value !== null;
export const deepMerge = (target, ...sources) => {
    if (sources.length === 0) return target
    const source = sources.shift()
    for (const key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
            const targetValue = target[key]
            const sourceValue = source[key]
            if (isObject(targetValue) && isObject(sourceValue)) target[key] = deepMerge(targetValue, sourceValue)
            else target[key] = sourceValue
        }
    }

    return deepMerge(target, ...sources)
};


// 数组组装1
export const assemblyDataA01 = ({ type, data, array = {}, object = [] }) => {
    if (data) {
        if (type === 'array') return data.map(item => ({ label: item[array.describe], value: item[array.field], unit: item[array.unit], icon: item.icon }))
        if (type === 'object') return object.map(item => ({ label: item.describe, value: data[item.field], unit: item.unit, icon: item.icon }))
    } else return ([])
}

// 请求函数to
export const promiseTo = (promise) => {
    return promise.then(res => [null, res]).catch(err => [err, undefined])
}

// 表单判断函数
export const checkConditions = (obj, conditions) => {
    return conditions.every(condition => {
        const { field, value } = condition
        return value.includes(obj[field])
    })
}

// 判断空对象
export const isEmptyObject = (obj) => {
    return obj && typeof obj === 'object' && Object.keys(obj).length === 0;
}

// 数组组装2
export const addAttr = (tree, data) => {
    const { label, value, extra, judge } = data
    const arr = tree.reduce((acc, node) => {
        if (judge && Number(node.isEnabled) !== 1) return acc
        const copy = {
            ...node,
            label: extra ? `${node[label]} (${node[extra]})` : node[label],
            value: node[value],
            children: node?.children ? addAttr(node.children, data) : null
        }
        acc.push(copy)
        return acc
    }, [])
    return arr.map(item => ({ label: item.label, value: item.value, children: item.children }))
}


// 组装排序条件
export const AssemblySort = (arr) => {
    return arr.filter(item => item.A04_type !== 'none').reduce((acc, item, index) => {
        acc[item.A04_value] = `${item.A04_type}@${index}`
        return acc
    }, {})
}

// 打开菜单
export const OpenMenuFunc = async (uuid, pageFunc, body_tabsMax, obj) => {
    const { updateActive, pageList, updateList } = pageFunc
    // 菜单存在
    if (pageList.findIndex(v => v.uuid === uuid) !== -1) {
        await PutIndexedDB('openKey', uuid)
        updateActive(uuid)
        return false
    }
    // 判断打开数量
    if (body_tabsMax !== 0 && pageList.length + 1 > body_tabsMax) {
        return alter({ title: '菜单打开最大限制', description: `左侧菜单最大打开 ${body_tabsMax} 个` })
    }
    const data = obj || treeValue(await GetIndexedDB('menu'), uuid)
    await PutIndexedDB('openKey', uuid)
    await PutIndexedDB('pageList', [...pageList, data])
    updateActive(uuid)
    updateList([...pageList, data])
}

// TODO 获取随机数
export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

// TODO 自定义组件统一数据返回处理
export const DiyDataReturn = (data, apiData, backData, diyKey) => {
    const { api_source, api_dataType, api_urlName, api_urlLevel, api_urlMapping, } = data
    if (api_source === 'A01') return backData
    if (api_source === 'A02') {
        if (!isEmptyObject(apiData)) return api_urlLevel ? getNestedValue(api_urlMapping, apiData[api_urlName]) : apiData[api_urlName]
        return []
    }
    if (api_source === 'A03') {
        if (diyKey) {
            if (diyKey === 'api_diyObj') {
                const obj = data[diyKey].reduce((acc, item) => {
                    acc[item.diyData_key] = item.diyData_value
                    return acc
                }, {})
                return obj
            }
            if (diyKey === 'api_diyArr') {
                console.log('组装数组', data[diyKey])
            }

            return []
        }
        else return api_dataType === 'A02' ? data['api_diyObj'] : data['api_diyArr']
    }
    return []
}

// TODO 组装弹出层的数据
export const AssemblyModelData = (data, row, Event) => {
    const { model_uuid, model_start, model_title, model_width, model_height, model_params, model_config } = data
    const rowData = model_params ? model_config.reduce((acc, item) => {
        acc[item.param_key] = item.param_type === 'diys' ? item.param_value : row[item.param_value]
        return acc
    }, {}) : {}

    return ({
        title: model_title,
        type: 'LayoutModel',
        isStart: model_start,
        width: model_width,
        height: model_height,
        Event: Event,
        modelData: { json: model_uuid, row: rowData }
    })
}

// TODO 组件跳转设置
export const AssemblyNavTo = (data, row, Event) => {
    if (data.navTo_type === 'int') {
        const { navTo_int_router, navTo_int_params } = data
        Event.emit({ type: 'setInternalRouting', data: `${navTo_int_router}${navTo_int_params}` })
    }
    if (data.navTo_type === 'ext') {
        const { navTo_ext_type, navTo_ext_url, navTo_ext_value, navTo_ext_field } = data
        const url = navTo_ext_type === 'field' ? row[navTo_ext_url] : navTo_ext_url
        const params = navTo_ext_value ? `?${navTo_ext_field}=${row[navTo_ext_value]}` : ''
        window.open(`${row[navTo_ext_url]}?${url}=${params}`)
    }
}