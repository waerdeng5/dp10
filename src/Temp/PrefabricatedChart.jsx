import './Prefabricated.scss'
import dayjs from 'dayjs'
import { useRef, useState } from 'react'
import { VChart } from '@visactor/react-vchart'
import { Gantt, VRender, TYPES } from '@visactor/vtable-gantt';
import * as VTableGantt from '@visactor/vtable-gantt';
import { useEffect } from 'react'
import { isEmptyObject, getRandomInt, getNestedValue, DiyDataReturn } from '../Utils'

const defaultDataA00 = [{ xField: 'China', yField: 0.4 }]
const defaultDataA02 = [
    { xField: 'China', seriesField: 'China', yField: 0.25 },
    { xField: 'Africa', seriesField: 'Africa', yField: 0.795 },
    { xField: 'EU', seriesField: 'EU', yField: 0.065 },
    { xField: 'USA', seriesField: 'USA', yField: 0.55 },
]
const defaultDataA01 = [
    { xField: 'Nail polish', seriesField: 'Africa', yField: getRandomInt(0, 10000) },
    { xField: 'Nail polish', seriesField: 'EU', yField: getRandomInt(0, 10000) },
    { xField: 'Nail polish', seriesField: 'China', yField: getRandomInt(0, 10000) },
    { xField: 'Nail polish', seriesField: 'USA', yField: getRandomInt(0, 10000) },
    { xField: 'Eyebrow pencil', seriesField: 'Africa', yField: getRandomInt(0, 10000) },
    { xField: 'Eyebrow pencil', seriesField: 'EU', yField: getRandomInt(0, 10000) },
    { xField: 'Eyebrow pencil', seriesField: 'China', yField: getRandomInt(0, 10000) },
    { xField: 'Eyebrow pencil', seriesField: 'USA', yField: getRandomInt(0, 10000) },
    { xField: 'Rouge', seriesField: 'Africa', yField: getRandomInt(0, 10000) },
    { xField: 'Rouge', seriesField: 'EU', yField: getRandomInt(0, 10000) },
    { xField: 'Rouge', seriesField: 'China', yField: getRandomInt(0, 10000) },
    { xField: 'Rouge', seriesField: 'USA', yField: getRandomInt(0, 10000) },
    { xField: 'Lipstick', seriesField: 'Africa', yField: getRandomInt(0, 10000) },
    { xField: 'Lipstick', seriesField: 'EU', yField: getRandomInt(0, 10000) },
    { xField: 'Lipstick', seriesField: 'China', yField: getRandomInt(0, 10000) },
    { xField: 'Lipstick', seriesField: 'USA', yField: getRandomInt(0, 10000) },
    { xField: 'Eyeshadows', seriesField: 'Africa', yField: getRandomInt(0, 10000) },
    { xField: 'Eyeshadows', seriesField: 'EU', yField: getRandomInt(0, 10000) },
    { xField: 'Eyeshadows', seriesField: 'China', yField: getRandomInt(0, 10000) },
    { xField: 'Eyeshadows', seriesField: 'USA', yField: getRandomInt(0, 10000) },
    { xField: 'Eyeliner', seriesField: 'Africa', yField: getRandomInt(0, 10000) },
    { xField: 'Eyeliner', seriesField: 'EU', yField: getRandomInt(0, 10000) },
    { xField: 'Eyeliner', seriesField: 'China', yField: getRandomInt(0, 10000) },
    { xField: 'Eyeliner', seriesField: 'USA', yField: getRandomInt(0, 10000) },
    { xField: 'Foundation', seriesField: 'Africa', yField: getRandomInt(0, 10000) },
    { xField: 'Foundation', seriesField: 'EU', yField: getRandomInt(0, 10000) },
    { xField: 'Foundation', seriesField: 'China', yField: getRandomInt(0, 10000) },
    { xField: 'Foundation', seriesField: 'USA', yField: getRandomInt(0, 10000) },
    { xField: 'Lip gloss', seriesField: 'Africa', yField: getRandomInt(0, 10000) },
    { xField: 'Lip gloss', seriesField: 'EU', yField: getRandomInt(0, 10000) },
    { xField: 'Lip gloss', seriesField: 'China', yField: getRandomInt(0, 10000) },
    { xField: 'Lip gloss', seriesField: 'USA', yField: getRandomInt(0, 10000) },
    { xField: 'Mascara', seriesField: 'Africa', yField: getRandomInt(0, 10000) },
    { xField: 'Mascara', seriesField: 'EU', yField: getRandomInt(0, 10000) },
    { xField: 'Mascara', seriesField: 'China', yField: getRandomInt(0, 10000) },
    { xField: 'Mascara', seriesField: 'USA', yField: getRandomInt(0, 10000) },
]

const backgroundFn = (data) => {
    const { background_type, background_colorSingle,
        background_x0, background_x1, background_y0, background_y1, background_r0, background_r1, background_colorGradient,
        background_x, background_y, background_startAngle, background_endAngle, background_colorArr
    } = data
    if (background_type === 'color') return background_colorSingle
    if (background_type === 'linear') {
        return ({
            gradient: 'linear',
            x0: background_x0,
            y0: background_y0,
            x1: background_x1,
            y1: background_y1,
            stops: background_colorGradient.map(({ percent, color }) => ({ offset: percent / 100, color }))
        })
    }
    if (background_type === 'radial') {
        return ({
            gradient: 'radial',
            x0: background_x0,
            y0: background_y0,
            r0: background_r0,
            x1: background_x1,
            y1: background_y1,
            r1: background_r1,
            stops: background_colorGradient.map(({ percent, color }) => ({ offset: percent / 100, color }))
        })
    }
    if (background_type === 'conical') {
        return ({
            gradient: 'conical',
            x: background_x,
            y: background_y,
            startAngle: background_startAngle,
            endAngle: background_endAngle,
            stops: background_colorArr
        })
    }
    return '#00000000'
}
const titleFn = (data) => {
    const { title_visible, title_subtextStatus, title_orient, title_innerPadding, title_align, title_verticalAlign, title_offsetX, title_offsetY,
        title_text, title_textDirection, title_textWhiteSpace, title_textKeepDirIn3d, title_textType, title_textColorSingle,
        title_textx0, title_textx1, title_texty0, title_texty1, title_textr0, title_textr1, title_textColorGradient, title_textx, title_texty,
        title_textStartAngle, title_textEndAngle, title_textColorArr, title_textSize, title_textFamily, title_textWeight, title_textStyle,
        title_textShadowOffsetX, title_textShadowOffsetY, title_textShadowBlur, title_textShadowColor,
        title_subtext, title_subtextDirection, title_subtextWhiteSpace, title_subtextKeepDirIn3d, title_subtextType, title_subtextColorSingle,
        title_subtextx0, title_subtextx1, title_subtexty0, title_subtexty1, title_subtextr0, title_subtextr1, title_subtextColorGradient,
        title_subtextx, title_subtexty, title_subtextStartAngle, title_subtextEndAngle, title_subtextColorArr, title_subtextSize, title_subtextFamily, title_subtextWeight, title_subtextStyle, title_subtextShadowOffsetX, title_subtextShadowOffsetY, title_subtextShadowBlur, title_subtextShadowColor,
    } = data
    const colorFn = (type, single, x0, x1, y0, y1, r0, r1, gradient, x, y, startAngle, endAngle, arr) => {
        if (type === 'color') return single
        if (type === 'linear') {
            return ({
                gradient: 'linear', x0, y0, x1, y1,
                stops: gradient.map(({ percent, color }) => ({ offset: percent / 100, color }))
            })
        }
        if (type === 'radial') {
            return ({
                gradient: 'radial', x0, y0, r0, x1, y1, r1,
                stops: gradient.map(({ percent, color }) => ({ offset: percent / 100, color }))
            })
        }
        if (type === 'conical') return ({ gradient: 'conical', x, y, startAngle, endAngle, stops: arr })
        return '#262626'
    }

    if (title_visible) {
        return ({
            text: title_text,
            subtext: title_subtextStatus && title_subtext,
            orient: title_orient,
            innerPadding: title_innerPadding,
            align: title_align,
            verticalAlign: title_verticalAlign,
            offsetX: title_offsetX,
            offsetY: title_offsetY,
            textStyle: {
                direction: title_textDirection,
                whiteSpace: title_textWhiteSpace,
                keepDirIn3d: title_textKeepDirIn3d,
                fontSize: title_textSize,
                fontFamily: title_textFamily,
                fontWeight: title_textWeight,
                fontStyle: title_textStyle,
                shadowOffsetX: title_textShadowOffsetX,
                shadowOffsetY: title_textShadowOffsetY,
                shadowBlur: title_textShadowBlur,
                shadowColor: title_textShadowColor,
                fill: colorFn(
                    title_textType,
                    title_textColorSingle,
                    title_textx0,
                    title_textx1,
                    title_texty0,
                    title_texty1,
                    title_textr0,
                    title_textr1,
                    title_textColorGradient,
                    title_textx,
                    title_texty,
                    title_textStartAngle,
                    title_textEndAngle,
                    title_textColorArr
                ),
            },
            subtextStyle: title_subtextStatus && {
                direction: title_subtextDirection,
                whiteSpace: title_subtextWhiteSpace,
                keepDirIn3d: title_subtextKeepDirIn3d,
                fontSize: title_subtextSize,
                fontFamily: title_subtextFamily,
                fontWeight: title_subtextWeight,
                fontStyle: title_subtextStyle,
                shadowOffsetX: title_subtextShadowOffsetX,
                shadowOffsetY: title_subtextShadowOffsetY,
                shadowBlur: title_subtextShadowBlur,
                shadowColor: title_subtextShadowColor,
                fill: colorFn(
                    title_subtextType,
                    title_subtextColorSingle,
                    title_subtextx0,
                    title_subtextx1,
                    title_subtexty0,
                    title_subtexty1,
                    title_subtextr0,
                    title_subtextr1,
                    title_subtextColorGradient,
                    title_subtextx,
                    title_subtexty,
                    title_subtextStartAngle,
                    title_subtextEndAngle,
                    title_subtextColorArr
                )
            }
        })
    }

    return false


}
const axesFn = (data) => {
    if (data.axes_arrList) {
        const axesArr = data.axes_arrList.map(item => {
            if (item.axes_visible) {
                const obj = {
                    visible: true,
                    mode: item.axes_mode,
                    orient: item.axes_orient,
                    inverse: item.axes_inverse,
                    hover: item.axes_hover,
                    select: item.axes_select,
                    depth: item.axes_depth,
                    domainLine: {
                        visible: item.axes_domainLine,
                        style: {
                            lineWidth: item.axes_domainLine_style_lineWidth,
                            stroke: item.axes_domainLine_style_stroke,
                        },
                    },
                    label: {
                        visible: item.axes_label,
                        containerAlign: item.axes_label_containerAlign,
                        space: item.axes_label_space,
                        formatMethod: val => `${val} ${item.axes_label_unit || ''}`,
                        inside: item.axes_label_inside,
                        autoRotate: item.axes_label_autoRotate,
                        autoLimit: item.axes_label_autoLimit,
                        autoWrap: item.axes_label_autoWrap,
                        autoHide: item.axes_label_autoHide,
                        style: {
                            fill: item.axes_label_styleFill,
                            fontSize: item.axes_label_styleSize,
                            fontFamily: item.axes_label_styleFamily,
                            fontWeight: item.axes_label_styleWeight,
                            fontStyle: item.axes_label_styleStyle,
                            shadowOffsetX: item.axes_label_styleShadowOffsetX,
                            shadowOffsetY: item.axes_label_styleShadowOffsetY,
                            shadowBlur: item.axes_label_styleShadowBlur,
                            shadowColor: item.axes_label_styleShadowColor,
                        }
                    },
                    title: {
                        visible: item.axes_title,
                        text: item.axes_title_text,
                        position: item.axes_title_position,
                        space: item.axes_title_space,
                        padding: item.axes_title_padding,
                        angle: item.axes_title_angle,
                        inside: item.axes_title_inside,
                        style: {
                            fill: item.axes_title_styleFill,
                            fontSize: item.axes_title_styleSize,
                            fontFamily: item.axes_title_styleFamily,
                            fontWeight: item.axes_title_styleWeight,
                            fontStyle: item.axes_title_styleStyle,
                            shadowOffsetX: item.axes_title_styleShadowOffsetX,
                            shadowOffsetY: item.axes_title_styleShadowOffsetY,
                            shadowBlur: item.axes_title_styleShadowBlur,
                            shadowColor: item.axes_title_styleShadowColor,
                        }
                    },
                    grid: {
                        visible: item.axes_grid,
                        alignWithLabel: item.axes_grid_alignWithLabel,
                        alternateColor: item.axes_grid_alternateColor?.map(item => item.color) || [],
                        style: {
                            stroke: item.axes_grid_stroke,
                            lineWidth: item.axes_grid_lineWidth,
                            lineDash: [item.axes_grid_lineDash2, item.axes_grid_lineDash1],
                        },
                    },
                    unit: {
                        visible: item.axes_unit,
                        text: item.axes_unit_text,
                        style: {
                            dx: item.axes_unit_dx,
                            dy: item.axes_unit_dy,
                            fill: item.axes_unit_styleFill,
                            fontSize: item.axes_unit_styleSize,
                            fontFamily: item.axes_unit_styleFamily,
                            fontWeight: item.axes_unit_styleWeight,
                            fontStyle: item.axes_unit_styleStyle,
                            shadowOffsetX: item.axes_unit_styleShadowOffsetX,
                            shadowOffsetY: item.axes_unit_styleShadowOffsetY,
                            shadowBlur: item.axes_unit_styleShadowBlur,
                            shadowColor: item.axes_unit_styleShadowColor,
                        }
                    },
                    tick: {
                        visible: item.axes_tick,
                        tickSize: item.axes_tick_tickSize,
                        inside: item.axes_tick_inside,
                        alignWithLabel: item.axes_tick_alignWithLabel,
                        tickCount: item.axes_tick_tickCount_status ? item.axes_tick_tickCount : undefined,
                        noDecimals: item.axes_tick_noDecimals,
                        style: {
                            stroke: item.axes_tick_style_stroke,
                            lineWidth: item.axes_tick_style_lineWidth,
                        },
                    },
                }
                if (item.axes_label_autoHide) obj.label.autoHideSeparation = item.axes_label_autoHideSeparation
                if (item.axes_hover) {
                    if (item.axes_domainLine) {
                        obj.domainLine.state.hover.lineWidth = item.axes_domainLine_state_hover_lineWidth
                        obj.domainLine.state.hover.stroke = item.axes_domainLine_state_hover_lineWidth
                    }
                    if (item.axes_label) {
                        obj.label.state.hover.fill = item.axes_label_hover_styleFill
                        obj.label.state.hover.fontSize = item.axes_label_hover_styleSize
                        obj.label.state.hover.fontFamily = item.axes_label_hover_styleFamily
                        obj.label.state.hover.fontWeight = item.axes_label_hover_styleWeight
                        obj.label.state.hover.fontStyle = item.axes_label_hover_styleStyle
                        obj.label.state.hover.shadowOffsetX = item.axes_label_hover_styleShadowOffsetX
                        obj.label.state.hover.shadowOffsetY = item.axes_label_hover_styleShadowOffsetY
                        obj.label.state.hover.shadowBlur = item.axes_label_hover_styleShadowBlur
                        obj.label.state.hover.shadowColor = item.axes_label_hover_styleShadowColor
                    }
                    if (item.axes_title) {
                        obj.title.state.hover.fill = item.axes_title_hover_styleFill
                        obj.title.state.hover.fontSize = item.axes_title_hover_styleSize
                        obj.title.state.hover.fontFamily = item.axes_title_hover_styleFamily
                        obj.title.state.hover.fontWeight = item.axes_title_hover_styleWeight
                        obj.title.state.hover.fontStyle = item.axes_title_hover_styleStyle
                        obj.title.state.hover.shadowOffsetX = item.axes_title_hover_styleShadowOffsetX
                        obj.title.state.hover.shadowOffsetY = item.axes_title_hover_styleShadowOffsetY
                        obj.title.state.hover.shadowBlur = item.axes_title_hover_styleShadowBlur
                        obj.title.state.hover.shadowColor = item.axes_title_hover_styleShadowColor
                    }
                    if (item.axes_tick) {
                        obj.tick.state.hover.stroke = item.axes_tick_style_hover_stroke
                        obj.tick.state.hover.lineWidth = item.axes_tick_style_hover_lineWidth
                    }
                }
                if (item.axes_select) {
                    if (item.axes_domainLine) {
                        obj.domainLine.state.select.lineWidth = item.axes_domainLine_state_selected_lineWidth
                        obj.domainLine.state.select.stroke = item.axes_domainLine_state_selected_stroke
                    }
                    if (item.axes_label) {
                        obj.label.state.select.fill = item.axes_label_select_styleFill
                        obj.label.state.select.fontSize = item.axes_label_select_styleSize
                        obj.label.state.select.fontFamily = item.axes_label_select_styleFamily
                        obj.label.state.select.fontWeight = item.axes_label_select_styleWeight
                        obj.label.state.select.fontStyle = item.axes_label_select_styleStyle
                        obj.label.state.select.shadowOffsetX = item.axes_label_select_styleShadowOffsetX
                        obj.label.state.select.shadowOffsetY = item.axes_label_select_styleShadowOffsetY
                        obj.label.state.select.shadowBlur = item.axes_label_select_styleShadowBlur
                        obj.label.state.select.shadowColor = item.axes_label_select_styleShadowColor
                    }
                    if (item.axes_title) {
                        obj.title.state.select.fill = item.axes_title_select_styleFill
                        obj.title.state.select.fontSize = item.axes_title_select_styleSize
                        obj.title.state.select.fontFamily = item.axes_title_select_styleFamily
                        obj.title.state.select.fontWeight = item.axes_title_select_styleWeight
                        obj.title.state.select.fontStyle = item.axes_title_select_styleStyle
                        obj.title.state.select.shadowOffsetX = item.axes_title_select_styleShadowOffsetX
                        obj.title.state.select.shadowOffsetY = item.axes_title_select_styleShadowOffsetY
                        obj.title.state.select.shadowBlur = item.axes_title_select_styleShadowBlur
                        obj.title.state.select.shadowColor = item.axes_title_select_styleShadowColor
                    }
                    if (item.axes_tick) {
                        obj.tick.state.select.stroke = item.axes_tick_style_selected_stroke
                        obj.tick.state.select.lineWidth = item.axes_tick_style_selected_lineWidth
                    }
                }
                return obj
            }
            return null
        })
        return axesArr





    }
    return []
}
const tooltipFn = (data) => {
    const { axes_tooltip, axes_tooltip_trigger, axes_tooltip_triggerOff, axes_tooltip_dimension, axes_tooltip_mark, axes_tooltip_group,
        axes_tooltip_dimension_title, axes_tooltip_dimension_title_extra, axes_tooltip_dimension_title_af, axes_tooltip_dimension_title_be,
        axes_tooltip_dimension_content, axes_tooltip_dimension_content_key, axes_tooltip_dimension_content_value, axes_tooltip_dimension_content_key_af,
        axes_tooltip_dimension_content_key_bf, axes_tooltip_dimension_content_value_af, axes_tooltip_dimension_content_value_bf, axes_tooltip_dimension_position,
        axes_tooltip_dimension_positionMode,
        axes_tooltip_mark_title, axes_tooltip_mark_title_extra, axes_tooltip_mark_title_af, axes_tooltip_mark_title_be,
        axes_tooltip_mark_content, axes_tooltip_mark_content_key, axes_tooltip_mark_content_value, axes_tooltip_mark_content_key_af,
        axes_tooltip_mark_content_key_bf, axes_tooltip_mark_content_value_af, axes_tooltip_mark_content_value_bf, axes_tooltip_mark_position,
        axes_tooltip_mark_positionMode,
        axes_tooltip_offset_x, axes_tooltip_offset_y, axes_tooltip_style_spaceRow, axes_tooltip_style_spanel_padding, axes_tooltip_style_spanel_backgroundColor,
        axes_tooltip_style_spanel_border, axes_tooltip_style_spanel_border_width, axes_tooltip_style_spanel_border_radius, axes_tooltip_style_spanel_border_color,
        axes_tooltip_style_spanel_shadow, axes_tooltip_style_spanel_shadow_x, axes_tooltip_style_spanel_shadow_y, axes_tooltip_style_spanel_shadow_blur,
        axes_tooltip_style_spanel_shadow_spread, axes_tooltip_style_spanel_shadow_color,
        tooltip_style_shape_hasShape, tooltip_style_shape_shapeType, tooltip_style_shape_shapeSize, tooltip_style_shape_spacing, tooltip_style_shape_shapeLineWidth,
        tooltip_style_shape_type, tooltip_style_shape_shapeFill, tooltip_style_shape_shapeStroke,
        tooltip_style_titleLabel_textAlign, tooltip_style_titleLabel_fontColor, tooltip_style_titleLabel_fontSize, tooltip_style_titleLabel_fontFamily, tooltip_style_titleLabel_fontWeight,
        tooltip_style_keyLabel_textAlign, tooltip_style_keyLabel_fontColor, tooltip_style_keyLabel_fontSize, tooltip_style_keyLabel_fontFamily, tooltip_style_keyLabel_fontWeight,
        tooltip_style_valueLabel_textAlign, tooltip_style_valueLabel_fontColor, tooltip_style_valueLabel_fontSize, tooltip_style_valueLabel_fontFamily, tooltip_style_valueLabel_fontWeight,
    } = data

    const DTitleFn = (title, type) => {
        if (type === 'dt' && axes_tooltip_dimension_title_extra) return axes_tooltip_dimension_title_af + title + axes_tooltip_dimension_title_be
        if (type === 'dk' && axes_tooltip_dimension_content_key) return axes_tooltip_dimension_content_key_af + title + axes_tooltip_dimension_content_key_bf
        if (type === 'dv' && axes_tooltip_dimension_content_value) return axes_tooltip_dimension_content_value_af + title + axes_tooltip_dimension_content_value_bf
        if (type === 'mt' && axes_tooltip_mark_title_extra) return axes_tooltip_mark_title_af + title + axes_tooltip_mark_title_be
        if (type === 'mk' && axes_tooltip_mark_content_key) return axes_tooltip_mark_content_key_af + title + axes_tooltip_mark_content_key_bf
        if (type === 'mv' && axes_tooltip_mark_content_value) return axes_tooltip_mark_content_value_af + title + axes_tooltip_mark_content_value_bf
        return title
    }

    if (axes_tooltip) {
        const data = {
            trigger: axes_tooltip_trigger,
            triggerOff: axes_tooltip_triggerOff,
            offset: { x: axes_tooltip_offset_x, y: axes_tooltip_offset_y },
            dimension: axes_tooltip_dimension && {
                position: axes_tooltip_dimension_position,
                positionMode: axes_tooltip_dimension_positionMode,
                title: {
                    visible: axes_tooltip_dimension_title,
                    value: ({ xField }) => DTitleFn(xField, 'dt')
                },
                content: {
                    visible: axes_tooltip_dimension_content,
                    key: ({ seriesField }) => DTitleFn(seriesField, 'dk'),
                    value: ({ yField }) => DTitleFn(yField, 'dv'),
                },
            },
            mark: axes_tooltip_mark && {
                position: axes_tooltip_mark_position,
                positionMode: axes_tooltip_mark_positionMode,
                title: {
                    visible: axes_tooltip_mark_title,
                    value: ({ xField }) => DTitleFn(xField, 'mt'),
                    hasShape: tooltip_style_shape_hasShape,
                },
                content: {
                    visible: axes_tooltip_mark_content,
                    key: ({ seriesField }) => DTitleFn(seriesField, 'mk'),
                    value: ({ yField }) => DTitleFn(yField, 'mv'),
                    hasShape: tooltip_style_shape_hasShape,
                },
            },
            style: {
                spaceRow: axes_tooltip_style_spaceRow,
                panel: {
                    padding: axes_tooltip_style_spanel_padding,
                    backgroundColor: axes_tooltip_style_spanel_backgroundColor,
                    border: axes_tooltip_style_spanel_border && {
                        width: axes_tooltip_style_spanel_border_width,
                        radius: axes_tooltip_style_spanel_border_radius,
                        color: axes_tooltip_style_spanel_border_color,
                    },
                    shadow: axes_tooltip_style_spanel_shadow && {
                        x: axes_tooltip_style_spanel_shadow_x,
                        y: axes_tooltip_style_spanel_shadow_y,
                        blur: axes_tooltip_style_spanel_shadow_blur,
                        spread: axes_tooltip_style_spanel_shadow_spread,
                        color: axes_tooltip_style_spanel_shadow_color,
                    },
                },
                shape: {
                    hasShape: tooltip_style_shape_hasShape,
                    shapeType: tooltip_style_shape_shapeType,
                    shapeSize: tooltip_style_shape_shapeSize,
                    spacing: tooltip_style_shape_spacing,
                    shapeLineWidth: tooltip_style_shape_shapeLineWidth,
                },
                titleLabel: {
                    textAlign: tooltip_style_titleLabel_textAlign,
                    fontColor: tooltip_style_titleLabel_fontColor,
                    fontSize: tooltip_style_titleLabel_fontSize,
                    fontFamily: tooltip_style_titleLabel_fontFamily,
                    fontWeight: tooltip_style_titleLabel_fontWeight,
                },
                keyLabel: {
                    textAlign: tooltip_style_keyLabel_textAlign,
                    fontColor: tooltip_style_keyLabel_fontColor,
                    fontSize: tooltip_style_keyLabel_fontSize,
                    fontFamily: tooltip_style_keyLabel_fontFamily,
                    fontWeight: tooltip_style_keyLabel_fontWeight,
                },
                valueLabel: {
                    textAlign: tooltip_style_valueLabel_textAlign,
                    fontColor: tooltip_style_valueLabel_fontColor,
                    fontSize: tooltip_style_valueLabel_fontSize,
                    fontFamily: tooltip_style_valueLabel_fontFamily,
                    fontWeight: tooltip_style_valueLabel_fontWeight,
                },
            }
        }
        if (tooltip_style_shape_hasShape) {
            if (tooltip_style_shape_type === 'A01') data.style.shape.shapeStroke = tooltip_style_shape_shapeStroke
            if (tooltip_style_shape_type === 'A02') data.style.shape.shapeFill = tooltip_style_shape_shapeFill
        }
        return data
    }
    return false

}
const legendFn = (data) => {
    const { legends_visible, legends_offsetX, legends_offsetY, legends_orient, legends_position, legends_select, legends_selectMode, legends_hover,
        legends_reversed, legends_title_visible, legends_title_text, legends_title_align, legends_title_space, legends_title_padding,
        legends_title_fontFill, legends_title_fontSize, legends_title_fontFamily, legends_title_fontWeight, legends_title_fontStyle, legends_title_shadowOffsetX,
        legends_title_shadowOffsetY, legends_title_shadowBlur, legends_title_shadowColor, legends_item, legends_item_spaceCol, legends_item_spaceRow,
        legends_item_background, legends_item_backActive, legends_item_padding, legends_item_align, legends_item_focus, legends_item_shape,
        legends_item_shape_space, legends_item_shape_symbolType, legends_item_shape_size, legends_item_label_af = '', legends_item_label_bf = '',
        legends_item_label_space, legends_item_label_fontFill, legends_item_label_fontSize, legends_item_label_fontFamily, legends_item_label_fontWeight,
        legends_item_label_fontStyle, legends_item_label_shadowOffsetX, legends_item_label_shadowOffsetY, legends_item_label_shadowBlur, legends_item_label_shadowColor,
    } = data

    return ({
        visible: legends_visible,
        offsetX: legends_offsetX,
        offsetY: legends_offsetY,
        orient: legends_orient,
        position: legends_position,
        select: legends_select,
        selectMode: legends_selectMode,
        hover: legends_hover,
        reversed: legends_reversed,
        data: items => {
            return items.map(item => {
                item.label = legends_item_label_af + item.label + legends_item_label_bf
                return item
            })
        },
        title: {
            visible: legends_title_visible,
            text: legends_title_text,
            align: legends_title_align,
            space: legends_title_space,
            padding: legends_title_padding,
            textStyle: {
                fontFill: legends_title_fontFill,
                fontSize: legends_title_fontSize,
                fontFamily: legends_title_fontFamily,
                fontWeight: legends_title_fontWeight,
                fontStyle: legends_title_fontStyle,
                shadowOffsetX: legends_title_shadowOffsetX,
                shadowOffsetY: legends_title_shadowOffsetY,
                shadowBlur: legends_title_shadowBlur,
                shadowColor: legends_title_shadowColor,
            }
        },
        item: {
            visible: legends_item,
            spaceCol: legends_item_spaceCol,
            spaceRow: legends_item_spaceRow,
            padding: legends_item_padding,
            align: legends_item_align,
            focus: legends_item_focus,
            background: {
                visible: true,
                style: { fill: legends_item_background },
                state: { selected: { fill: legends_item_backActive }, selectedHover: { fill: legends_item_backActive } },
            },
            shape: {
                visible: legends_item_shape,
                space: legends_item_shape_space,
                style: { size: legends_item_shape_size, symbolType: legends_item_shape_symbolType }
            },
            label: {
                space: legends_item_label_space,
                style: {
                    fill: legends_item_label_fontFill,
                    fontSize: legends_item_label_fontSize,
                    fontFamily: legends_item_label_fontFamily,
                    fontWeight: legends_item_label_fontWeight,
                    fontStyle: legends_item_label_fontStyle,
                    shadowOffsetX: legends_item_label_shadowOffsetX,
                    shadowOffsetY: legends_item_label_shadowOffsetY,
                    shadowBlur: legends_item_label_shadowBlur,
                    shadowColor: legends_item_label_shadowColor,
                }
            }
        }

    })
}
const crosshairFn = (data, type) => {
    const { crosshair_trigger, crosshair_xField, crosshair_yField,
        crosshair_xField_type, crosshair_xField_color, crosshair_xField_lineWidth, crosshair_xField_lineDash_s, crosshair_xField_lineDash_x,
        crosshair_xField_label_color, crosshair_xField_label_size, crosshair_xField_label_family, crosshair_xField_label_weight, crosshair_xField_label_style,
        crosshair_yField_type, crosshair_yField_color, crosshair_yField_lineWidth, crosshair_yField_lineDash_s, crosshair_yField_lineDash_x,
        crosshair_yField_label_color, crosshair_yField_label_size, crosshair_yField_label_family, crosshair_yField_label_weight, crosshair_yField_label_style,
    } = data

    if (type === 'rose' || type === 'radar') {
        return ({
            trigger: crosshair_trigger,
            categoryField: {
                visible: crosshair_xField,
                line: {
                    smooth: true,
                    type: crosshair_xField_type,
                    style: {
                        fill: crosshair_xField_color,
                        lineWidth: crosshair_xField_lineWidth,
                        lineDash: [crosshair_xField_lineDash_s, crosshair_xField_lineDash_x]
                    }
                },
                label: {
                    visible: true,
                    style: {
                        fill: crosshair_xField_label_color,
                        fontSize: crosshair_xField_label_size,
                        fontFamily: crosshair_xField_label_family,
                        fontWeight: crosshair_xField_label_weight,
                        fontStyle: crosshair_xField_label_style,
                    }
                }
            },
            valueField: {
                visible: crosshair_yField,
                line: {
                    smooth: true,
                    type: crosshair_yField_type,
                    style: {
                        fill: crosshair_yField_color,
                        lineWidth: crosshair_yField_lineWidth,
                        lineDash: [crosshair_yField_lineDash_s, crosshair_yField_lineDash_x]
                    }
                },
                label: {
                    visible: true,
                    style: {
                        fill: crosshair_yField_label_color,
                        fontSize: crosshair_yField_label_size,
                        fontFamily: crosshair_yField_label_family,
                        fontWeight: crosshair_yField_label_weight,
                        fontStyle: crosshair_yField_label_style,
                    }
                }
            },
        })
    }



    return ({
        trigger: crosshair_trigger,
        xField: {
            visible: crosshair_xField,
            line: {
                type: crosshair_xField_type,
                style: {
                    fill: crosshair_xField_color,
                    lineWidth: crosshair_xField_lineWidth,
                    lineDash: [crosshair_xField_lineDash_s, crosshair_xField_lineDash_x]
                }
            },
            label: {
                visible: true,
                style: {
                    fill: crosshair_xField_label_color,
                    fontSize: crosshair_xField_label_size,
                    fontFamily: crosshair_xField_label_family,
                    fontWeight: crosshair_xField_label_weight,
                    fontStyle: crosshair_xField_label_style,
                }
            }
        },
        yField: {
            visible: crosshair_yField,
            line: {
                type: crosshair_yField_type,
                style: {
                    fill: crosshair_yField_color,
                    lineWidth: crosshair_yField_lineWidth,
                    lineDash: [crosshair_yField_lineDash_s, crosshair_yField_lineDash_x]
                }
            },
            label: {
                visible: true,
                style: {
                    fill: crosshair_yField_label_color,
                    fontSize: crosshair_yField_label_size,
                    fontFamily: crosshair_yField_label_family,
                    fontWeight: crosshair_yField_label_weight,
                    fontStyle: crosshair_yField_label_style,
                }
            }
        },
    })
}
const scrollBarFn = (data) => {
    const { scrollBar_visible, scrollBar_orient, scrollBar_round, scrollBar_start, scrollBar_end, scrollBar_rail, scrollBar_slider,
        scrollBar_roamDrag, scrollBar_roamZoom } = data
    if (!scrollBar_visible) return false
    return ({
        visible: scrollBar_visible,
        orient: scrollBar_orient,
        round: scrollBar_round,
        start: scrollBar_start,
        end: scrollBar_end,
        roamZoom: { enable: scrollBar_roamZoom, },
        roamDrag: { enable: scrollBar_roamDrag, },
        rail: { style: { fill: scrollBar_rail } },
        slider: { style: { fill: scrollBar_slider } }
    })


}
const labelFn = (data) => {
    const { label_visible, label_position, label_offset, label_overlap, label_hideOnHit, label_smartInvert, label_animation, label_showKey, label_showValue,
        label_extraKey, label_Key_af, label_Key_bf, label_extraValue, label_Value_af, label_Value_bf, label_style_textAlign, label_style_textBaseline, label_style_size,
        label_style_family, label_style_weight, label_style_style, label_style_shadowOffsetX, label_style_shadowOffsetY, label_style_shadowBlur, label_style_shadowColor
    } = data

    const labelText = e => {
        let text = ''
        if (label_showKey) text += `${label_extraKey && label_Key_af || ''}${e.seriesField}${label_extraKey && label_Key_bf || ':'}`
        if (label_showValue) text += `${label_extraValue && label_Value_af || ''}${e.yField}${label_extraValue && label_Value_bf || ''}`
        return text
    }

    return ({
        visible: label_visible,
        position: label_position,
        offset: label_offset,
        overlap: label_overlap && { hideOnHit: label_hideOnHit },
        smartInvert: label_smartInvert,
        animation: label_animation,
        style: {
            visible: label_visible,
            text: e => labelText(e),
            textAlign: label_style_textAlign,
            textBaseline: label_style_textBaseline,
            fontSize: label_style_size,
            fontFamily: label_style_family,
            fontWeight: label_style_weight,
            fontStyle: label_style_style,
            shadowOffsetX: label_style_shadowOffsetX,
            shadowOffsetY: label_style_shadowOffsetY,
            shadowBlur: label_style_shadowBlur,
            shadowColor: label_style_shadowColor,
        }
    })


}
const indicatorFn = (data, values, type) => {
    if (values.length === 0) return {}
    const [firstData] = values
    const { indicator_firstData, indicator_visible, indicator_fixed, indicator_trigger, indicator_offsetX, indicator_offsetY, indicator_limitRatio,
        indicator_title, indicator_title_init, indicator_title_field, indicator_title_af, indicator_title_bf, indicator_title_fill,
        indicator_title_Size, indicator_title_Height, indicator_title_Family, indicator_title_Weight, indicator_title_Style,
        indicator_content, indicator_content_init, indicator_content_field, indicator_content_af, indicator_content_bf, indicator_content_fill,
        indicator_content_Size, indicator_content_Height, indicator_content_Family, indicator_content_Weight, indicator_content_Style,
        indicator_content_percent, indicator_content_percentData, indicator_title_percent, indicator_title_percentData,
        indicator_titleNumber, indicator_contentNumber,
    } = data
    const percentData = (value, type) => {
        if (type === 'content' && indicator_content_percent) {
            if (indicator_content_percentData === 'A01') return `${value}%`
            if (indicator_content_percentData === 'A02') return `${parseInt(value * 10000) / 100}%`
        }
        if (type === 'title' && indicator_title_percent) {
            if (indicator_title_percentData === 'A01') return `${value}%`
            if (indicator_title_percentData === 'A02') return `${parseInt(value * 10000) / 100}%`
        }
        return value
    }


    return ({
        visible: indicator_visible,
        fixed: indicator_fixed,
        trigger: indicator_trigger,
        offsetX: indicator_offsetX,
        offsetY: indicator_offsetY,
        limitRatio: indicator_limitRatio,
        title: {
            visible: indicator_title,
            style: {
                text: e => {
                    if (type === 'liquid' || type === 'gauge') return percentData(values[0][indicator_title_field], 'title')
                    if (e) return indicator_title_af + percentData(e[indicator_title_field] ?? e[0][indicator_title_field], 'title') + indicator_title_bf || indicator_title_init
                    if (indicator_firstData && firstData) return indicator_title_af + percentData(firstData[indicator_title_field], 'title') + indicator_title_bf || indicator_title_init
                    if (indicator_titleNumber) {
                        const totalNumber = values.reduce((acc, cur) => acc + Number(cur[indicator_title_field]), 0)
                        return totalNumber
                    }
                    return indicator_title_init
                },
                fill: indicator_title_fill,
                fontSize: indicator_title_Size,
                fontFamily: indicator_title_Family,
                fontWeight: indicator_title_Weight,
                fontStyle: indicator_title_Style,
                lineHeight: indicator_title_Height,
            }
        },
        content: {
            visible: indicator_content,
            style: {
                text: e => {
                    if (type === 'liquid' || type === 'gauge') return percentData(values[0][indicator_content_field], 'content')
                    if (e) return indicator_content_af + percentData(e[indicator_content_field] ?? e[0][indicator_content_field], 'content') + indicator_content_bf || indicator_content_init
                    if (indicator_firstData && firstData) return indicator_content_af + percentData(firstData[indicator_content_field], 'content') + indicator_content_bf || indicator_content_init
                    if (indicator_contentNumber) {
                        const totalNumber = values.reduce((acc, cur) => acc + Number(cur[indicator_title_field]), 0)
                        return totalNumber
                    }
                    return indicator_content_init
                },
                fill: indicator_content_fill,
                fontSize: indicator_content_Size,
                fontFamily: indicator_content_Family,
                fontWeight: indicator_content_Weight,
                fontStyle: indicator_content_Style,
                lineHeight: indicator_content_Height,
            }
        }
    })
}
const lineFn = (data) => {
    const { line_visible, line_curveType, line_lineWidth } = data
    return ({
        visible: line_visible,
        style: { curveType: line_curveType, lineWidth: line_lineWidth },
    })
}
const pointFn = (data) => {
    const { point_style_visible, point_style_symbolType, point_style_size, point_state_visible, point_state_symbolType, point_state_size } = data
    return ({
        visible: true,
        style: { visible: point_style_visible, size: point_style_size, symbolType: point_style_symbolType },
        state: { dimension_hover: { visible: point_state_visible, size: point_state_size, symbolType: point_state_symbolType } }
    })
}
const areaFn = (data) => {
    const { area_visible, area_curveType, area_lineWidth, area_style_top, area_style_btm } = data
    return ({
        visible: area_visible,
        style: {
            curveType: area_curveType,
            lineWidth: area_lineWidth,
            fill: {
                gradient: 'linear', x0: 0.5, y0: 0, x1: 0.5, y1: 1,
                stops: [{ offset: 0, opacity: area_style_top }, { offset: 1, opacity: area_style_btm }]
            }
        },
    })
}
const barFn = (data) => {
    const { bar_visible, bar_cornerRadius, bar_shadowBlur, bar_shadowColor, bar_shadowOffsetX, bar_shadowOffsetY, bar_style_btm, bar_style_top,
        bar_texture, bar_textureColor, bar_texturePadding, bar_textureSize, bar_texture_visible,
        bar_width, bar_width_visible, bar_height_visible, bar_height
    } = data
    const props = {
        visible: bar_visible,
        style: {
            cornerRadius: bar_cornerRadius,
            shadowBlur: bar_shadowBlur,
            shadowColor: bar_shadowColor,
            shadowOffsetX: bar_shadowOffsetX,
            shadowOffsetY: bar_shadowOffsetY,
            fill: {
                gradient: 'linear', x0: 0, y0: 0, x1: 0, y1: 1,
                stops: [{ offset: 0, opacity: bar_style_top }, { offset: 1, opacity: bar_style_btm }]
            }
        }
    }
    if (bar_width_visible) props.style.width = bar_width
    if (bar_height_visible) props.style.height = bar_height
    if (bar_texture_visible) {
        props.style.texture = bar_texture
        props.style.textureColor = bar_textureColor
        props.style.texturePadding = bar_texturePadding
        props.style.textureSize = bar_textureSize
    }
    return props
}
const pieFn = (data) => {
    const { outerRadius, innerRadius, startAngle, endAngle, padAngle, cornerRadius, opacityTop, opacityBtm,
        shadowOffsetX, shadowOffsetY, shadowBlur, shadowColor, textureStatus, texture, textureColor, textureSize, texturePadding,
        stateStatus, stateType, state_outerRadius, state_innerRadius, state_cornerRadius
    } = data

    const pop = {
        outerRadius,
        innerRadius,
        startAngle,
        endAngle,
        padAngle,
        pie: {
            visible: true,
            style: {
                cornerRadius,
                shadowOffsetX,
                shadowOffsetY,
                shadowBlur,
                shadowColor,
                fill: {
                    gradient: 'linear',
                    x0: 0, y0: 0, x1: 0, y1: 1,
                    stops: [
                        { offset: 0, opacity: opacityTop },
                        { offset: 1, opacity: opacityBtm }
                    ],
                }
            },
        }
    }
    if (textureStatus) {
        pop.pie.style.texture = texture
        pop.pie.style.textureColor = textureColor
        pop.pie.style.texturePadding = texturePadding
        pop.pie.style.textureSize = textureSize
    }
    if (stateStatus) {
        pop.pie.state = {}
        pop.pie.state[stateType] = {}
        pop.pie.state[stateType].style = {}
        pop.pie.state[stateType].outerRadius = state_outerRadius
        pop.pie.state[stateType].innerRadius = state_innerRadius
        pop.pie.state[stateType].style.cornerRadius = state_cornerRadius
    }
    return pop
}
const roseFn = (data) => {
    const { outerRadius, innerRadius, startAngle, endAngle, padAngle, cornerRadius, opacityTop, opacityBtm,
        shadowOffsetX, shadowOffsetY, shadowBlur, shadowColor,
        textureStatus, texture, textureColor, textureSize, texturePadding } = data
    const pop = {
        outerRadius,
        innerRadius,
        startAngle,
        endAngle,
        padAngle,
        rose: {
            visible: true,
            style: {
                cornerRadius,
                shadowOffsetX,
                shadowOffsetY,
                shadowBlur,
                shadowColor,
                fill: {
                    gradient: 'linear',
                    x0: 0, y0: 0, x1: 0, y1: 1,
                    stops: [
                        { offset: 0, opacity: opacityTop },
                        { offset: 1, opacity: opacityBtm }
                    ],
                }
            }
        }
    }
    if (textureStatus) {
        pop.rose.style.texture = texture
        pop.rose.style.textureColor = textureColor
        pop.rose.style.texturePadding = texturePadding
        pop.rose.style.textureSize = textureSize
    }
    return pop
}
const liquidFn = (data) => {
    const { maskShape, wave, outlineMargin, outlinePadding, color, backColor, liquid_fillTop, liquid_fillBtm, liquidBack_fillTop, liquidBack_fillBtm,
        textureStatus, texture, textureColor, textureSize, texturePadding
    } = data
    const pop = {
        indicatorSmartInvert: true,
        outlineMargin: outlineMargin,
        outlinePadding: outlinePadding,
        color: [color],
        maskShape: maskShape,
        liquid: {
            wave: wave,
            style: {
                fill: {
                    gradient: 'linear', x0: 0, y0: 0, x1: 0, y1: 1,
                    stops: [{ offset: 0, opacity: liquid_fillTop }, { offset: 1, opacity: liquid_fillBtm }],
                },
            }
        },
        liquidBackground: {
            style: {
                fill: {
                    gradient: 'linear', x0: 0, y0: 0, x1: 0, y1: 1,
                    stops: [
                        { offset: 0, color: backColor, opacity: liquidBack_fillTop },
                        { offset: 1, color: backColor, opacity: liquidBack_fillBtm },
                    ],
                },
            }
        }
    }
    if (textureStatus) {
        pop.liquid.style.texture = texture
        pop.liquid.style.textureColor = textureColor
        pop.liquid.style.texturePadding = texturePadding
        pop.liquid.style.textureSize = textureSize
    }
    return pop
}
const gaugeFn = (data, values) => {
    const { render_xField, render_yField, outerRadius, innerRadius, startAngle, endAngle, type,
        circular_innerPadding, circular_outerPadding, circular_progressColor, circular_progressRadius, circular_trackColor, circular_trackRadius,
        pointer, pointer_color, pointer_width, pointer_height, pointer_center_x, pointer_center_y,
        pin, pin_color, pin_width, pin_height, pinBack, pinBack_color, pinBack_width, pinBack_height,
        gauge_color, gauge_cornerRadius, gauge_label, gauge_position, gauge_textColor, gauge_textSize, gauge_textFamily, gauge_textWeight, gauge_textStyle,
        gauge_ShadowOffsetX, gauge_ShadowOffsetY, gauge_ShadowBlur, gauge_ShadowColor, gauge_offsetRadius,
        tickMask, tickMask_forceAlign, tickMask_angle, tickMask_offsetAngle, tickMask_cornerRadius
    } = data

    const pop = type === 'circularProgress' ? {
        data: { values },
        valueField: render_yField.split(','),
        categoryField: render_xField.split(','),
        gauge: {
            type: 'circularProgress',
            progress: { // 进度条样式
                style: {
                    innerPadding: circular_innerPadding,
                    outerPadding: circular_outerPadding,
                    cornerRadius: circular_progressRadius,
                    fill: Array.isArray(circular_progressColor) ? {
                        gradient: 'conical',
                        stops: circular_progressColor.map(({ percent, color }) => ({ offset: percent / 100, color }))
                    } : circular_progressColor
                }
            },
            track: { // 背景样式
                style: {
                    cornerRadius: circular_trackRadius,
                    fill: circular_trackColor
                }
            }
        },
    } : {
        data: [{ id: 'pointer', values }, { id: 'segment', values: gauge_color }],
        valueField: render_yField.split(','),
        categoryField: render_xField.split(','),
        gauge: {
            type: 'gauge',
            dataIndex: 1,
            categoryField: 'type',
            valueField: 'value',
            seriesField: 'type',
            segment: { style: { cornerRadius: gauge_cornerRadius, fill: datum => datum['color'] } },
            label: {
                visible: gauge_label,
                position: gauge_position,
                offsetRadius: gauge_offsetRadius,
                style: {
                    text: datum => datum['type'],
                    fontSize: gauge_textSize,
                    fontFamily: gauge_textFamily,
                    fontWeight: gauge_textWeight,
                    fontStyle: gauge_textStyle,
                    fill: gauge_textColor,
                    shadowOffsetX: gauge_ShadowOffsetX,
                    shadowOffsetY: gauge_ShadowOffsetY,
                    shadowBlur: gauge_ShadowBlur,
                    shadowColor: gauge_ShadowColor,
                }
            }
        }
    }
    pop.type = 'gauge'
    pop.outerRadius = outerRadius
    pop.innerRadius = innerRadius
    pop.startAngle = startAngle
    pop.endAngle = endAngle
    pop.pointer = {
        visible: pointer,
        width: pointer_width,
        height: pointer_height,
        center: [pointer_center_x, pointer_center_y],
        style: { fill: pointer_color }
    }
    pop.pin = {
        visible: pin,
        width: pin_width,
        height: pin_height,
        style: { fill: pin_color }
    }
    pop.pinBackground = {
        visible: pinBack,
        width: pinBack_width,
        height: pinBack_height,
        style: { fill: pinBack_color }
    }
    pop.gauge.tickMask = {
        visible: tickMask,
        angle: tickMask_angle,
        offsetAngle: tickMask_offsetAngle,
        forceAlign: tickMask_forceAlign,
        style: { cornerRadius: tickMask_cornerRadius }
    }
    return pop
}
const linearFn = (data) => {
    const { bandWidth, cornerRadius, progress_fill, progress_xy } = data
    return ({
        cornerRadius,
        bandWidth,
        progress: {
            style: {
                fill: Array.isArray(progress_fill) ? {
                    gradient: 'linear', x0: 0, y0: 0, x1: progress_xy, y1: 1,
                    stops: progress_fill.map(({ percent, color }) => ({ offset: percent / 100, color }))
                } : progress_fill
            }
        }
    })
}
const circularFn = (data) => {
    const { outerRadius, innerRadius, innerPadding, outerPadding, cornerRadius, colorType, color, colorData, tickMask,
        tickMask_forceAlign, tickMask_angle, tickMask_offsetAngle, tickMask_cornerRadius
    } = data
    const pop = {
        roundCap: true,
        outerRadius,
        innerRadius,
        cornerRadius,
        progress: {
            style: {
                innerPadding,
                outerPadding
            }
        },
    }
    if (colorType === 'A01') pop.color = color.map(item => (item.color || item))
    if (colorType === 'A02') pop.progress.style.fill = Array.isArray(colorData) ?
        {
            gradient: 'conical',
            stops: colorData.map(({ percent, color }) => ({ offset: percent / 100, color }))
        } : colorData

    pop.tickMask = {
        visible: tickMask,
        angle: tickMask_angle,
        offsetAngle: tickMask_offsetAngle,
        forceAlign: tickMask_forceAlign,
        style: { cornerRadius: tickMask_cornerRadius }
    }
    return pop
}
const extensionMarkFn = (data) => {
    const { ExtensionMark_Arr = [] } = data

    const list = ExtensionMark_Arr?.map(item => {
        const { extensionMark_color, extensionMark_family, extensionMark_maxLineWidth, extensionMark_number, extensionMark_render, extensionMark_shadowBlur, extensionMark_shadowColor, extensionMark_shadowOffsetX, extensionMark_shadowOffsetY, extensionMark_size, extensionMark_style, extensionMark_text, extensionMark_weight, extensionMark_xy } = item

        const yData = extensionMark_xy === 'A01' ? extensionMark_number : 0

        const xFn = (datum, ctx) => {
            if (extensionMark_xy === 'A01') return ctx.valueToX([0])
            if (extensionMark_xy === 'A02') return ctx.valueToX([datum.yField]) / 2
        }
        const yFn = (datum, ctx) => {
            if (extensionMark_xy === 'A01') return ctx.valueToY([datum.xField]) + yData
            if (extensionMark_xy === 'A02') return ctx.valueToY([datum.xField])
        }
        const maxLineWidthFn = (datum, ctx) => {
            if (extensionMark_maxLineWidth === 'A01') return false
            if (extensionMark_maxLineWidth === 'A02') return ctx.valueToX([datum.yField]) - extensionMark_number
            if (extensionMark_maxLineWidth === 'A03') return ctx.valueToX([1]) - ctx.valueToX([0])
        }

        return ({
            type: 'text',
            dataId: 'data',
            visible: true,
            style: {
                text: datum => extensionMark_render === 'A01' ? datum[extensionMark_text] : extensionMark_text,
                textAlign: extensionMark_xy === 'A01' ? 'start' : 'center',
                textBaseline: 'middle',
                fill: extensionMark_color,
                fontFamily: extensionMark_family,
                fontSize: extensionMark_size,
                fontWeight: extensionMark_weight,
                fontStyle: extensionMark_style,
                shadowOffsetX: extensionMark_shadowOffsetX,
                shadowOffsetY: extensionMark_shadowOffsetY,
                shadowBlur: extensionMark_shadowBlur,
                shadowColor: extensionMark_shadowColor,
                x: (datum, ctx) => xFn(datum, ctx),
                y: (datum, ctx) => yFn(datum, ctx),
                maxLineWidth: (datum, ctx) => maxLineWidthFn(datum, ctx)
            }
        })
    })
    return list
}
// Todo 统一数据处理
const SetSpecDataFn = (data, type, values) => {
    const { direction, invalidType, percent, stack, render_xField, render_yField, render_seriesField } = data
    const pop = { type, data: { id: 'data', values }, direction: direction, invalidType: invalidType, percent: percent, stack: stack }
    if (type === 'bar' || type === 'line' || type === 'area' || type === 'linearProgress') {
        pop.xField = render_xField.split(',')
        pop.yField = render_yField.split(',')
        pop.seriesField = render_seriesField.split(',')
    }
    if (type === 'liquid') {
        pop.valueField = render_yField.split(',')
    }
    if (type === 'pie') {
        pop.valueField = render_yField.split(',')
        pop.categoryField = render_xField.split(',')
    }
    if (type === 'rose' || type === 'radar') {
        pop.valueField = render_yField.split(',')
        pop.categoryField = render_xField.split(',')
        pop.seriesField = render_seriesField.split(',')
    }
    if (type === 'circularProgress') {
        pop.valueField = render_yField.split(',')
        pop.categoryField = render_xField.split(',')
        pop.seriesField = render_xField.split(',')
    }
    return pop
}
const dataSourceTypeFn = (type, data, UrlData) => {
    const { dataSourceType, data_diyData } = data

    if (dataSourceType === 'A03') return data_diyData
    if (dataSourceType === 'A01') {
        if (type === 'liquid' || type === 'linearProgress') return defaultDataA00
        if (type === 'circularProgress') return defaultDataA02
        return defaultDataA01
    }
    if (dataSourceType === 'A02') {
        const { data_apiName, dataType, data_apiLevel, data_apiData, data_apiArr } = data
        if (isEmptyObject(UrlData) || !UrlData[data_apiName]) {
            // console.log('未获取到接口数据---111')
            return ([])
        }
        const apiData = getNestedValue(data_apiLevel, UrlData[data_apiName])
        if (dataType === 'A02') {
            const mapping = data_apiData?.map(v => ({ xField: v.xField, yField: apiData[v.yField], seriesField: v.seriesField }))
            return mapping || []
        }
        if (dataType === 'A03') {
            const mapping = data_apiArr?.flatMap(item =>
                apiData?.map(v => ({ uuid: v.uuid, xField: v[item.data_xField], yField: v[item.data_yField], seriesField: item.data_seriesField }))
            )
            return mapping || []
        }
        return ([])
    }
}
// !!! 图例设置
// Line 折线图
const PrefabricatedChartLine = ({ tempId, data, UrlData, LayoutEvent }) => {
    const chartRef = useRef()
    const [Spec, setSpec] = useState()
    const SetSpecFn = (values) => {
        const spec = {
            ...SetSpecDataFn(data, 'line', values),
            color: data.color.map(item => (item.color || item)),
            background: backgroundFn(data),
            title: titleFn(data),
            axes: axesFn(data),
            label: labelFn(data),
            tooltip: tooltipFn(data),
            legends: legendFn(data),
            crosshair: crosshairFn(data),
            scrollBar: scrollBarFn(data),
            line: lineFn(data),
            point: pointFn(data),
        }
        setSpec(spec)
    }
    useEffect(() => { SetSpecFn(dataSourceTypeFn('line', data, UrlData)) }, [data, UrlData])
    const optionsData = { disableDirtyBounds: true, options3d: { enable: true, enableView3dTransform: true, center: { x: 500, y: 250 } } }
    if (Spec) return <VChart className='ChartsClass' ref={chartRef} spec={Spec} options={optionsData} onClickFilter={{ level: 'mark' }}
        onClick={e => {
            console.log(e.datum)
        }} />
}
// Area 面积图
const PrefabricatedChartArea = ({ tempId, data, UrlData, LayoutEvent }) => {
    const chartRef = useRef()
    const [Spec, setSpec] = useState()
    const SetSpecFn = (values) => {
        const spec = {
            ...SetSpecDataFn(data, 'area', values),
            color: data.color.map(item => (item.color || item)),
            background: backgroundFn(data),
            title: titleFn(data),
            axes: axesFn(data),
            label: labelFn(data),
            tooltip: tooltipFn(data),
            legends: legendFn(data),
            crosshair: crosshairFn(data),
            scrollBar: scrollBarFn(data),
            point: pointFn(data),
            area: areaFn(data)
        }
        setSpec(spec)
    }
    useEffect(() => {
        SetSpecFn(dataSourceTypeFn('area', data, UrlData))
    }, [data, UrlData])
    const optionsData = { disableDirtyBounds: true, options3d: { enable: true, enableView3dTransform: true, center: { x: 500, y: 250 } } }
    if (Spec) return <VChart className='ChartsClass' ref={chartRef} spec={Spec} options={optionsData} />
};
// Bar 柱状图
const PrefabricatedChartBar = ({ tempId, data, UrlData, LayoutEvent }) => {
    const chartRef = useRef()
    const [Spec, setSpec] = useState()
    const SetSpecFn = (values) => {
        const spec = {
            ...SetSpecDataFn(data, 'bar', values),
            color: data.color.map(item => (item.color || item)),
            background: backgroundFn(data),
            title: titleFn(data),
            axes: axesFn(data),
            label: labelFn(data),
            tooltip: tooltipFn(data),
            legends: legendFn(data),
            crosshair: crosshairFn(data),
            scrollBar: scrollBarFn(data),
            bar: barFn(data),
        }
        setSpec(spec)
    }
    useEffect(() => { SetSpecFn(dataSourceTypeFn('bar', data, UrlData)) }, [data, UrlData])
    const optionsData = { disableDirtyBounds: true, options3d: { enable: true, enableView3dTransform: true, center: { x: 500, y: 250 } } }
    if (Spec) return (
        <VChart
            spec={Spec}
            ref={chartRef}
            className='ChartsClass'
            options={optionsData}
            onClickFilter={{ level: 'mark' }}
            onClick={e => {
                console.log(e.datum)
            }}
        />
    )
};
// Histogram 直方图
const PrefabricatedChartHistogram = ({ tempId, data, UrlData, LayoutEvent }) => {
    return (
        <div>
            Histogram 直方图
        </div>
    );
};
// RangeColumn 区间柱状图
const PrefabricatedChartRangeColumn = ({ tempId, data, UrlData, LayoutEvent }) => {
    return (
        <div>
            RangeColumn 区间柱状图
        </div>
    );
};
// BoxPlot 箱线图
const PrefabricatedChartBoxPlot = ({ tempId, data, UrlData, LayoutEvent }) => {
    return (
        <div>
            BoxPlot 箱线图
        </div>
    );
};
// Pie 饼图
const PrefabricatedChartPie = ({ tempId, data, UrlData, LayoutEvent }) => {
    const chartRef = useRef()
    const [Spec, setSpec] = useState()
    const SetSpecFn = (values) => {
        const spec = {
            ...SetSpecDataFn(data, 'pie', values),
            color: data.color.map(item => (item.color || item)),
            background: backgroundFn(data),
            title: titleFn(data),
            label: labelFn(data),
            tooltip: tooltipFn(data),
            legends: legendFn(data),
            ...pieFn(data),
            indicator: indicatorFn(data, values),
        }
        setSpec(spec)
    }

    useEffect(() => {
        SetSpecFn(dataSourceTypeFn('pie', data, UrlData))
    }, [data, UrlData])
    const optionsData = { disableDirtyBounds: true, options3d: { enable: true, enableView3dTransform: true, center: { x: 500, y: 250 } } }
    if (Spec) return <VChart className='ChartsClass' ref={chartRef} spec={Spec} options={optionsData} />
};
// Rose 玫瑰图
const PrefabricatedChartRose = ({ tempId, data, UrlData, LayoutEvent }) => {
    const chartRef = useRef()
    const [Spec, setSpec] = useState()
    const SetSpecFn = (values) => {

        const spec = {
            ...SetSpecDataFn(data, 'rose', values),
            color: data.color.map(item => (item.color || item)),
            background: backgroundFn(data),
            axes: axesFn(data),
            title: titleFn(data),
            label: labelFn(data),
            tooltip: tooltipFn(data),
            legends: legendFn(data),
            crosshair: crosshairFn(data, 'rose'),
            ...roseFn(data),
        }
        setSpec(spec)
    }
    useEffect(() => { SetSpecFn(dataSourceTypeFn('rose', data, UrlData)) }, [data, UrlData])
    const optionsData = { disableDirtyBounds: true, options3d: { enable: true, enableView3dTransform: true, center: { x: 500, y: 250 } } }
    if (Spec) return <VChart className='ChartsClass' ref={chartRef} spec={Spec} options={optionsData} />
};
// Funnel 漏斗图
const PrefabricatedChartFunnel = ({ tempId, data, UrlData, LayoutEvent }) => {
    return (
        <div>
            Funnel 漏斗图
        </div>
    );
};
// Radar 雷达图
const PrefabricatedChartRadar = ({ tempId, data, UrlData, LayoutEvent }) => {
    const chartRef = useRef()
    const [Spec, setSpec] = useState()
    const SetSpecFn = (values) => {
        const spec = {
            ...SetSpecDataFn(data, 'radar', values),
            color: data.color.map(item => (item.color || item)),
            background: backgroundFn(data),
            axes: axesFn(data),
            title: titleFn(data),
            label: labelFn(data),
            tooltip: tooltipFn(data),
            legends: legendFn(data),
            crosshair: crosshairFn(data, 'rose'),
            ...roseFn(data),
            indicator: indicatorFn(data, values),
            area: areaFn(data),
            point: pointFn(data),
        }
        setSpec(spec)
    }
    useEffect(() => { SetSpecFn(dataSourceTypeFn('radar', data, UrlData)) }, [data, UrlData])
    const optionsData = { disableDirtyBounds: true, options3d: { enable: true, enableView3dTransform: true, center: { x: 500, y: 250 } } }
    if (Spec) return <VChart className='ChartsClass' ref={chartRef} spec={Spec} options={optionsData} />
};
// Sankey 桑基图
const PrefabricatedChartSankey = ({ tempId, data, UrlData, LayoutEvent }) => {
    return (
        <div>
            Sankey 桑基图
        </div>
    );
};
// Sequence 序列图
const PrefabricatedChartSequence = ({ tempId, data, UrlData, LayoutEvent }) => {
    return (
        <div>
            Sequence 序列图
        </div>
    );
};
// WordCloud 词云图
const PrefabricatedChartWordCloud = ({ tempId, data, UrlData, LayoutEvent }) => {
    return (
        <div>
            WordCloud 词云图
        </div>
    );
};
// Gauge 仪表盘
const PrefabricatedChartGauge = ({ tempId, data, UrlData, LayoutEvent }) => {
    const chartRef = useRef()
    const [Spec, setSpec] = useState()
    const SetSpecFn = (values) => {
        const spec = {
            axes: [{ type: 'linear', orient: 'angle', label: false, grid: false, inside: true, }],
            background: backgroundFn(data),
            title: titleFn(data),
            tooltip: tooltipFn(data),
            indicator: indicatorFn(data, values, 'gauge'),
            ...gaugeFn(data, values)
        }
        setSpec(spec)
    }
    useEffect(() => { SetSpecFn(dataSourceTypeFn('gauge', data, UrlData)) }, [data, UrlData])
    const optionsData = { disableDirtyBounds: true, options3d: { enable: true, enableView3dTransform: true, center: { x: 500, y: 250 } } }
    if (Spec) return <VChart className='ChartsClass' ref={chartRef} spec={Spec} options={optionsData} />
};
// LinearProgress 线性进度条
const PrefabricatedChartLinearProgress = ({ tempId, data, UrlData, LayoutEvent }) => {
    const chartRef = useRef()
    const [Spec, setSpec] = useState()
    const SetSpecFn = (values) => {
        const spec = {
            ...SetSpecDataFn(data, 'linearProgress', values),
            background: backgroundFn(data),
            title: titleFn(data),
            tooltip: tooltipFn(data),
            ...linearFn(data),
            extensionMark: extensionMarkFn(data)
        }
        setSpec(spec)
    }
    useEffect(() => { SetSpecFn(dataSourceTypeFn('linearProgress', data, UrlData)) }, [data, UrlData])
    const optionsData = { disableDirtyBounds: true, options3d: { enable: true, enableView3dTransform: true, center: { x: 500, y: 250 } } }
    if (Spec) return <VChart className='ChartsClass' ref={chartRef} spec={Spec} options={optionsData} />
};
// CircularProgress 环形进度条
const PrefabricatedChartCircularProgress = ({ tempId, data, UrlData, LayoutEvent }) => {
    const chartRef = useRef()
    const [Spec, setSpec] = useState()
    const SetSpecFn = (values) => {
        const spec = {
            ...SetSpecDataFn(data, 'circularProgress', values || []),
            background: backgroundFn(data),
            title: titleFn(data),
            tooltip: tooltipFn(data),
            ...circularFn(data),
            indicator: indicatorFn(data, values),
        }
        setSpec(spec)
    }
    useEffect(() => { SetSpecFn(dataSourceTypeFn('circularProgress', data, UrlData)) }, [data, UrlData])
    const optionsData = { disableDirtyBounds: true, options3d: { enable: true, enableView3dTransform: true, center: { x: 500, y: 250 } } }
    if (Spec) return <VChart className='ChartsClass' ref={chartRef} spec={Spec} options={optionsData} />
};
// Treemap 树图
const PrefabricatedChartTreemap = ({ tempId, data, UrlData, LayoutEvent }) => {
    return (
        <div>
            Treemap 树图
        </div>
    );
};
// Waterfall 瀑布图
const PrefabricatedChartWaterfall = ({ tempId, data, UrlData, LayoutEvent }) => {
    return (
        <div>
            Waterfall 瀑布图
        </div>
    );
};
// CirclePacking 圆包图
const PrefabricatedChartCirclePacking = ({ tempId, data, UrlData, LayoutEvent }) => {
    return (
        <div>
            CirclePacking 圆包图
        </div>
    );
};
// Sunburst 旭日图
const PrefabricatedChartSunburst = ({ tempId, data, UrlData, LayoutEvent }) => {
    return (
        <div>
            Sunburst 旭日图
        </div>
    );
};
// Correlation 散点相关系数图
const PrefabricatedChartCorrelation = ({ tempId, data, UrlData, LayoutEvent }) => {
    return (
        <div>
            Correlation 散点相关系数图
        </div>
    );
};
// Liquid 水球图
const PrefabricatedChartLiquid = ({ tempId, data, UrlData, LayoutEvent }) => {

    const chartRef = useRef()
    const [Spec, setSpec] = useState()
    const SetSpecFn = (values) => {
        const spec = {
            ...SetSpecDataFn(data, 'liquid', values),
            background: backgroundFn(data),
            title: titleFn(data),
            tooltip: tooltipFn(data),
            indicator: indicatorFn(data, values, 'liquid'),
            ...liquidFn(data)
        }
        setSpec(spec)
    }
    useEffect(() => { SetSpecFn(dataSourceTypeFn('liquid', data, UrlData)) }, [data, UrlData])
    const optionsData = { disableDirtyBounds: true, options3d: { enable: true, enableView3dTransform: true, center: { x: 500, y: 250 } } }
    if (Spec) return <VChart className='ChartsClass' ref={chartRef} spec={Spec} options={optionsData} />
};
// Venn 韦恩图
const PrefabricatedChartVenn = ({ tempId, data, UrlData, LayoutEvent }) => {
    return (
        <div>
            Venn 韦恩图
        </div>
    );
};
// Mosaic 马赛克图
const PrefabricatedChartMosaic = ({ tempId, data, UrlData, LayoutEvent }) => {
    return (
        <div>
            Mosaic 马赛克图
        </div>
    );
};
// Candlestick 蜡烛图
const PrefabricatedChartCandlestick = ({ tempId, data, UrlData, LayoutEvent }) => {
    return (
        <div>
            Candlestick 蜡烛图
        </div>
    );
};


const recordsTestData = [
    {
        id: 1,
        title: '土方工程',
        hierarchyState: 'expand',
        // baselineStartDateField: '2026-08-01',
        // baselineEndDateField: '2026-08-30',
        start: "2026-08-12",
        end: "2026-08-26",
        progress: 40,

        // type: 'project',
        children: [
            { id: 14, title: "超期", type: "milestone", start: "2026-08-30" },
            {
                id: 11,
                title: "田地平整",
                baselineStartDateField: '2026-08-10',
                baselineEndDateField: '2026-08-20',
                start: "2026-08-10",
                end: "2026-08-20",
                progress: 50,
                // priority: 'P0'
            },
            { id: 12, title: "土方开挖", start: "2026-08-05", end: "2026-08-25", progress: 100, priority: 'P0' },
            { id: 13, title: "土方回填", start: "2026-08-10", end: "2026-08-15", progress: 0, priority: 'P0' },
        ]
    },
    {
        id: 2,
        title: '灌溉工程',
        hierarchyState: 'expand',
        // type: 'project',
        children: [
            { id: 11, title: "塘坝清淤加固", start: "2026-08-12", end: "2026-08-26", progress: 60, priority: 'P0' },
            { id: 12, title: "蓄水池修建", start: "2026-08-15", end: "2026-08-20", progress: 60, priority: 'P0' },
            { id: 13, title: "机井新打 / 维修", start: "2026-08-17", end: "2026-08-24", progress: 60, priority: 'P0' },
            { id: 14, title: "里程碑", type: "milestone", start: "2026-08-8" }
        ]
    },
    {
        id: 3,
        title: '排水工程',
        hierarchyState: 'expand',
        // type: 'project',
        children: [
            { id: 11, title: "排水沟衬砌", start: "2026-08-08", end: "2026-09-15", progress: 60, priority: 'P0' },
            { id: 12, title: "生态排水沟施工", start: "2026-08-18", end: "2026-08-25", progress: 60, priority: 'P0' },
            { id: 13, title: "排水沟衬砌、生态排水沟施工", start: "2026-08-01", end: "2026-08-15", progress: 60, priority: 'P0' },
            { id: 14, title: "里程碑", type: "milestone", start: "2026-08-8" }
        ]
    },
]

const columnsTestData = [
    {
        field: 'title',
        title: '施工任务',
        width: 'auto',
        sort: true,
        tree: true,
        editor: 'input'
    },
]

const PrefabricatedChartGantt = ({ tempId, data, UrlData, LayoutEvent }) => {
    const GanttRef = useRef(null)
    const ganttInstance = useRef(null)

    const { api_source, http_urlName, http_urlLevel, http_urlMapping,
        fields_id, fields_hierarchyState, fields_start, fields_end, fields_baseStart, fields_baseEnd, fields_type, fields_progress, fields_columns,
        taskListTable_tableWidth, taskListTable_minTableWidth, taskListTable_maxTableWidth,

        headerStyle_bgColor, headerStyle_padding, headerStyle_textAlign, headerStyle_textBaseline, headerStyle_color, headerStyle_strokeColor,
        headerStyle_fontSize, headerStyle_fontFamily, headerStyle_fontWeight, headerStyle_fontStyle, headerStyle_autoWrapText, headerStyle_textOverflow,
        headerStyle_borderColor, headerStyle_borderLineWidth, headerStyle_borderLineDash, headerStyle_lineHeight,
        headerStyle_underline, headerStyle_underlineDash, headerStyle_underlineOffset,
        bodyStyle_bgColor, bodyStyle_padding, bodyStyle_textAlign, bodyStyle_textBaseline, bodyStyle_color, bodyStyle_strokeColor,
        bodyStyle_fontSize, bodyStyle_fontFamily, bodyStyle_fontWeight, bodyStyle_fontStyle, bodyStyle_autoWrapText, bodyStyle_textOverflow,
        bodyStyle_borderColor, bodyStyle_borderLineWidth, bodyStyle_borderLineDash,
        bodyStyle_lineHeight, bodyStyle_underline, bodyStyle_underlineDash, bodyStyle_underlineOffset,

        timelineHeader_colWidth, timelineHeader_backgroundColor, timelineHeader_hideWeekend, timelineHeader_weekendColWidth,
        timelineHeader_horizontalLine_lineColor, timelineHeader_horizontalLine_lineWidth, timelineHeader_horizontalLine_lineDash,
        timelineHeader_verticalLine_lineColor, timelineHeader_verticalLine_lineWidth, timelineHeader_verticalLine_lineDash,
        timelineHeader_scales, frame_verticalSplitLineMoveable, headerRowHeight, rowHeight, dateFormat, minDate, maxDate,
        overscrollBehavior, underlayBackgroundColor, frame_outerFrameStyle_borderColor,
        frame_outerFrameStyle_borderLineWidth, frame_outerFrameStyle_borderLineDash, frame_outerFrameStyle_cornerRadius,
        frame_verticalSplitLineHighlight_lineColor, frame_verticalSplitLineHighlight_lineWidth, frame_verticalSplitLineHighlight_lineDash,
        frame_verticalSplitLine_lineColor, frame_verticalSplitLine_lineWidth, frame_verticalSplitLine_lineDash,
        frame_horizontalSplitLine_lineColor, frame_horizontalSplitLine_lineWidth, frame_horizontalSplitLine_lineDash,

        taskBar_resizable, taskBar_moveable, taskBar_progressAdjustable, taskBar_moveToExtendDateRange, taskBar_selectable, taskBar_locateIcon,
        taskBar_scheduleCreatable, taskBar_typeStatus, taskBar_isMilestone, taskBar_isLabelText, taskBar_labelText, taskBar_baselinePosition,
        taskBar_baselineStyle_barColor, taskBar_baselineStyle_completedBarColor, taskBar_baselineStyle_width, taskBar_baselineStyle_cornerRadius, taskBar_baselineStyle_borderLineWidth, taskBar_baselineStyle_borderColor, taskBar_labelTextStyle_padding, taskBar_labelTextStyle_color,
        taskBar_labelTextStyle_fontSize, taskBar_labelTextStyle_fontFamily, taskBar_labelTextStyle_textAlign, taskBar_labelTextStyle_textBaseline, taskBar_labelTextStyle_orient, taskBar_labelTextStyle_orientHandleWithOverflow, taskBar_labelTextStyle_textOverflow,
        taskBar_barStyle_barColor, taskBar_barStyle_completedBarColor, taskBar_barStyle_width, taskBar_barStyle_cornerRadius, taskBar_barStyle_borderLineWidth, taskBar_barStyle_borderColor, taskBar_barStyle_minSize, taskBar_barStyle_paddingTop,
        taskBar_milestoneStyle_borderColor, taskBar_milestoneStyle_borderLineWidth, taskBar_milestoneStyle_fillColor, taskBar_milestoneStyle_cornerRadius, taskBar_milestoneStyle_width, taskBar_milestoneStyle_labelText, taskBar_milestoneStyle_textOrient, taskBar_milestoneStyle_color, taskBar_milestoneStyle_fontSize, taskBar_milestoneStyle_fontFamily, taskBar_milestoneStyle_padding,
        grid_backgroundColor, grid_weekendBackgroundColor, grid_verticalLineDependenceOnTimeScale,
        grid_verticalLine_lineColor, grid_verticalLine_lineWidth, grid_verticalLine_lineDash,
        grid_horizontalLine_lineColor, grid_horizontalLine_lineWidth, grid_horizontalLine_lineDash,
        markLine_list, rowSeriesNumber_visible, rowSeriesNumber_title, rowSeriesNumber_field, rowSeriesNumber_width,
        rowSeriesNumber_dragOrder, rowSeriesNumber_disableColumnResize, scrollStyle_visible, scrollStyle_hoverOn, scrollStyle_barToSide,
        scrollStyle_ignoreFrozenCols, scrollStyle_scrollRailColor, scrollStyle_scrollSliderColor, scrollStyle_scrollSliderCornerRadius,
        scrollStyle_width, scrollStyle_horizontalPadding, scrollStyle_verticalPadding
    } = data

    //  fields_hierarchyState, , , , , fields_type, fields_progress, 

    const option = {
        taskKeyField: fields_id || 'id',
        records: recordsTestData,
        minDate,
        maxDate,
        headerRowHeight,
        rowHeight,
        overscrollBehavior,
        dateFormat,
        underlayBackgroundColor,
        frame: {
            outerFrameStyle: {
                borderColor: frame_outerFrameStyle_borderColor,
                borderLineWidth: frame_outerFrameStyle_borderLineWidth?.split(',').map(Number) || 0,
                borderLineDash: frame_outerFrameStyle_borderLineDash?.split(',').map(Number) || 0,
                cornerRadius: 0
            },
            verticalSplitLine: { // 垂直分割线样式
                lineColor: frame_verticalSplitLine_lineColor,
                lineWidth: frame_verticalSplitLine_lineWidth?.split(',').map(Number) || 0,
                lineDash: frame_verticalSplitLine_lineDash?.split(',').map(Number) || 0,
            },
            horizontalSplitLine: { // 水平分割线样式
                lineColor: frame_horizontalSplitLine_lineColor,
                lineWidth: frame_horizontalSplitLine_lineWidth?.split(',').map(Number) || 0,
                lineDash: frame_horizontalSplitLine_lineDash?.split(',').map(Number) || 0,
            },
            verticalSplitLineMoveable: frame_verticalSplitLineMoveable,
            verticalSplitLineHighlight: { // 垂直分割线高亮样式
                lineColor: frame_verticalSplitLineHighlight_lineColor,
                lineWidth: frame_verticalSplitLineHighlight_lineWidth?.split(',').map(Number) || 0,
                lineDash: frame_verticalSplitLineHighlight_lineDash?.split(',').map(Number) || 0,
            }
        },
        taskListTable: {
            columns: columnsTestData,
            tableWidth: taskListTable_tableWidth,
            minTableWidth: taskListTable_minTableWidth,
            maxTableWidth: taskListTable_maxTableWidth,
            theme: {
                headerStyle: {
                    hover: false,
                    bgColor: headerStyle_bgColor,
                    padding: headerStyle_padding?.split(',').map(Number) || 0,
                    textAlign: headerStyle_textAlign,
                    textBaseline: headerStyle_textBaseline,
                    color: headerStyle_color,
                    strokeColor: headerStyle_strokeColor,
                    fontSize: headerStyle_fontSize,
                    fontFamily: headerStyle_fontFamily,
                    fontWeight: headerStyle_fontWeight,
                    fontStyle: headerStyle_fontStyle,
                    autoWrapText: headerStyle_autoWrapText,
                    textOverflow: headerStyle_textOverflow,
                    borderColor: headerStyle_borderColor,
                    borderLineWidth: headerStyle_borderLineWidth?.split(',').map(Number) || 0,
                    borderLineDash: headerStyle_borderLineDash?.split(',').map(Number) || 0,
                    lineHeight: headerStyle_lineHeight,
                    underline: headerStyle_underline,
                    underlineDash: headerStyle_underlineDash?.split(',').map(Number) || 0,
                    underlineOffset: headerStyle_underlineOffset,
                },
                bodyStyle: {
                    hover: false,
                    bgColor: bodyStyle_bgColor,
                    padding: bodyStyle_padding?.split(',').map(Number) || 0,
                    textAlign: bodyStyle_textAlign,
                    textBaseline: bodyStyle_textBaseline,
                    color: bodyStyle_color,
                    strokeColor: bodyStyle_strokeColor,
                    fontSize: bodyStyle_fontSize,
                    fontFamily: bodyStyle_fontFamily,
                    fontWeight: bodyStyle_fontWeight,
                    fontStyle: bodyStyle_fontStyle,
                    autoWrapText: bodyStyle_autoWrapText,
                    textOverflow: bodyStyle_textOverflow,
                    borderColor: bodyStyle_borderColor,
                    borderLineWidth: bodyStyle_borderLineWidth?.split(',').map(Number) || 0,
                    borderLineDash: bodyStyle_borderLineDash?.split(',').map(Number) || 0,
                    lineHeight: bodyStyle_lineHeight,
                    underline: bodyStyle_underline,
                    underlineDash: bodyStyle_underlineDash?.split(',').map(Number) || 0,
                    underlineOffset: bodyStyle_underlineOffset,
                },
            },
        },
        timelineHeader: {
            colWidth: timelineHeader_colWidth,
            hideWeekend: timelineHeader_hideWeekend,
            weekendColWidth: timelineHeader_weekendColWidth,
            backgroundColor: timelineHeader_backgroundColor,
            horizontalLine: {
                lineColor: timelineHeader_horizontalLine_lineColor,
                lineWidth: timelineHeader_horizontalLine_lineWidth?.split(',').map(Number) || 0,
                lineDash: timelineHeader_horizontalLine_lineDash?.split(',').map(Number) || 0,
            },
            verticalLine: {
                lineColor: timelineHeader_verticalLine_lineColor,
                lineWidth: timelineHeader_verticalLine_lineWidth?.split(',').map(Number) || 0,
                lineDash: timelineHeader_verticalLine_lineDash?.split(',').map(Number) || 0,
            },
        },
        taskBar: {
            startDateField: fields_start || 'start',
            endDateField: fields_end || 'end',
            baselineStartDateField: fields_baseStart || 'baselineStartDateField',
            baselineEndDateField: fields_baseEnd || 'baselineEndDateField',
            progressField: fields_progress || 'progress',
            resizable: taskBar_resizable,
            moveable: taskBar_moveable,
            progressAdjustable: taskBar_progressAdjustable,
            moveToExtendDateRange: taskBar_moveToExtendDateRange,
            locateIcon: taskBar_locateIcon,
            scheduleCreatable: taskBar_scheduleCreatable,
            baselinePosition: taskBar_baselinePosition,
            selectable: taskBar_selectable,

            // selectedBarStyle: {
            //     borderLineWidth: 10
            // },
            // hoverBarStyle: {  // 悬停任务条样式
            //     cornerRadius: 0,
            //     barOverlayColor: 'rgba(99, 144, 0, 0.4)'
            // },

            labelText: taskBar_isLabelText ? taskBar_labelText : '',
            labelTextStyle: {
                padding: taskBar_labelTextStyle_padding?.split(',').map(Number) || 0,
                color: taskBar_labelTextStyle_color,
                fontFamily: taskBar_labelTextStyle_fontFamily,
                fontSize: taskBar_labelTextStyle_fontSize,
                textAlign: taskBar_labelTextStyle_textAlign,
                textBaseline: taskBar_labelTextStyle_textBaseline,
                orient: taskBar_labelTextStyle_orient,
                orientHandleWithOverflow: taskBar_labelTextStyle_orientHandleWithOverflow,
                textOverflow: taskBar_labelTextStyle_textOverflow,
            },

            baselineStyle: {
                barColor: taskBar_baselineStyle_barColor,
                completedBarColor: taskBar_baselineStyle_completedBarColor,
                width: taskBar_baselineStyle_width,
                cornerRadius: taskBar_baselineStyle_cornerRadius,
                borderWidth: taskBar_baselineStyle_borderLineWidth,
                borderColor: taskBar_baselineStyle_borderColor
            },

            barStyle: {
                width: taskBar_barStyle_width,
                barColor: taskBar_barStyle_barColor,
                completedBarColor: taskBar_barStyle_completedBarColor,
                cornerRadius: taskBar_barStyle_cornerRadius,
                borderLineWidth: taskBar_barStyle_borderLineWidth,
                borderColor: taskBar_barStyle_borderColor,
                minSize: taskBar_barStyle_minSize,
                paddingTop: taskBar_barStyle_paddingTop
            },
            milestoneStyle: {
                width: taskBar_milestoneStyle_width,
                // fillColor: e => {
                //     console.log(e)
                //     if (e.progress === 10) return '#f00'
                //     if (e.progress === 20) return '#0ff'
                //     // if (e.progress === 30) return taskBar_milestoneStyle_fillColor
                //     return 'rgb(1, 43, 75)'
                // },
                // fillColor: taskBar_milestoneStyle_fillColor,
                fillColor: ((e, ...i) => {
                    return 'red'
                })(),
                borderColor: taskBar_milestoneStyle_borderColor,
                borderLineWidth: taskBar_milestoneStyle_borderLineWidth,
                cornerRadius: taskBar_milestoneStyle_cornerRadius,
                labelText: taskBar_milestoneStyle_labelText,
                textOrient: taskBar_milestoneStyle_textOrient,
                labelTextStyle: {
                    fontFamily: taskBar_milestoneStyle_fontFamily,
                    fontSize: taskBar_milestoneStyle_fontSize,
                    color: taskBar_milestoneStyle_color,
                    padding: taskBar_milestoneStyle_padding?.split(',').map(Number) || 0,
                }
            },
        },
        grid: { // 网格配置
            backgroundColor: grid_backgroundColor,
            weekendBackgroundColor: grid_weekendBackgroundColor,
            verticalLineDependenceOnTimeScale: grid_verticalLineDependenceOnTimeScale,
            verticalLine: {
                lineColor: grid_verticalLine_lineColor,
                lineWidth: grid_verticalLine_lineWidth?.split(',').map(Number) || 0,
                lineDash: grid_verticalLine_lineDash?.split(',').map(Number) || 0,
            },
            horizontalLine: {
                lineColor: grid_horizontalLine_lineColor,
                lineWidth: grid_horizontalLine_lineWidth?.split(',').map(Number) || 0,
                lineDash: grid_horizontalLine_lineDash?.split(',').map(Number) || 0,
            }
        },

        rowSeriesNumber: rowSeriesNumber_visible ? {
            title: rowSeriesNumber_title,
            field: rowSeriesNumber_field,
            width: rowSeriesNumber_width,
            dragOrder: rowSeriesNumber_dragOrder,
            disableColumnResize: rowSeriesNumber_disableColumnResize,
            headerStyle: {
                hover: false,
                bgColor: headerStyle_bgColor,
                padding: headerStyle_padding?.split(',').map(Number) || 0,
                textAlign: headerStyle_textAlign,
                textBaseline: headerStyle_textBaseline,
                color: headerStyle_color,
                strokeColor: headerStyle_strokeColor,
                fontSize: headerStyle_fontSize,
                fontFamily: headerStyle_fontFamily,
                fontWeight: headerStyle_fontWeight,
                fontStyle: headerStyle_fontStyle,
                autoWrapText: headerStyle_autoWrapText,
                textOverflow: headerStyle_textOverflow,
                borderColor: headerStyle_borderColor,
                borderLineWidth: headerStyle_borderLineWidth?.split(',').map(Number) || 0,
                borderLineDash: headerStyle_borderLineDash?.split(',').map(Number) || 0,
                lineHeight: headerStyle_lineHeight,
                underline: headerStyle_underline,
                underlineDash: headerStyle_underlineDash?.split(',').map(Number) || 0,
                underlineOffset: headerStyle_underlineOffset,
            },
            bodyStyle: {
                hover: false,
                bgColor: bodyStyle_bgColor,
                padding: bodyStyle_padding?.split(',').map(Number) || 0,
                textAlign: bodyStyle_textAlign,
                textBaseline: bodyStyle_textBaseline,
                color: bodyStyle_color,
                strokeColor: bodyStyle_strokeColor,
                fontSize: bodyStyle_fontSize,
                fontFamily: bodyStyle_fontFamily,
                fontWeight: bodyStyle_fontWeight,
                fontStyle: bodyStyle_fontStyle,
                autoWrapText: bodyStyle_autoWrapText,
                textOverflow: bodyStyle_textOverflow,
                borderColor: bodyStyle_borderColor,
                borderLineWidth: bodyStyle_borderLineWidth?.split(',').map(Number) || 0,
                borderLineDash: bodyStyle_borderLineDash?.split(',').map(Number) || 0,
                lineHeight: bodyStyle_lineHeight,
                underline: bodyStyle_underline,
                underlineDash: bodyStyle_underlineDash?.split(',').map(Number) || 0,
                underlineOffset: bodyStyle_underlineOffset,
            },

        } : false,
        scrollStyle: {
            hoverOn: scrollStyle_hoverOn,
            barToSide: scrollStyle_barToSide,
            ignoreFrozenCols: scrollStyle_ignoreFrozenCols,
            scrollRailColor: scrollStyle_scrollRailColor,
            visible: scrollStyle_visible,
            width: scrollStyle_width,
            scrollSliderCornerRadius: scrollStyle_scrollSliderCornerRadius,
            scrollSliderColor: scrollStyle_scrollSliderColor,
            horizontalPadding: scrollStyle_horizontalPadding,
            verticalPadding: scrollStyle_verticalPadding,
        }
    };

    useEffect(() => {
        const backData = DiyDataReturn(data, UrlData, recordsTestData, 'api_diyObj')
        const scales = timelineHeader_scales.map(v => {
            const { rowHeight, unit, step, startOfWeek, isPrefix, prefixText, isSuffix, suffixText, formatType, formatMapping, textAlign, textBaseline,
                padding, fontSize, fontWeight, color, strokeColor, textOverflow, textStick
            } = v
            return ({
                rowHeight,
                unit,
                step,
                startOfWeek,
                style: {
                    padding: padding?.split(',').map(Number) || 0,
                    fontSize,
                    fontWeight,
                    color,
                    strokeColor,
                    textAlign,
                    textBaseline,
                    textOverflow,
                    textStick
                },
                format(date) {
                    const { dateIndex, startDate, endDate } = date
                    const str = `${isPrefix ? prefixText : ''}${formatType === 'date' ? dayjs(startDate).format(formatMapping) : dateIndex}${isSuffix ? suffixText : ''}`
                    return str
                },
            })
        })
        option.timelineHeader.scales = scales
        const markLine = markLine_list.map(v => {
            const { date, position, scrollToMarkLine, style_lineColor, style_lineWidth, style_lineDash, content, color, fontSize, lineHeight,
                fontWeight, cornerRadius, backgroundColor } = v
            return ({
                date,
                position,
                scrollToMarkLine,
                style: {
                    lineColor: style_lineColor,
                    lineWidth: style_lineWidth,
                    lineDash: style_lineDash?.split(',').map(Number) || 0,
                },
                content,
                contentStyle: {
                    color,
                    fontSize,
                    lineHeight,
                    fontWeight,
                    cornerRadius,
                    backgroundColor
                },
            })
        })
        option.markLine = markLine

        if (GanttRef.current && !ganttInstance.current) {
            option.records = backData
            if (fields_columns) option.taskListTable.columns = fields_columns
            ganttInstance.current = new Gantt(GanttRef.current, option)
        }
        return () => {
            if (ganttInstance.current) {
                ganttInstance.current.release()
                ganttInstance.current = null
            }
        }
    }, [data, UrlData])





    return (
        <div className='PrefabricatedChartGantt'   >
            <div ref={GanttRef} />
        </div>
    )
}



export const PrefabricatedChartTemplate = {
    PrefabricatedChartLine,
    PrefabricatedChartArea,
    PrefabricatedChartBar,
    PrefabricatedChartHistogram,
    PrefabricatedChartRangeColumn,
    PrefabricatedChartBoxPlot,
    PrefabricatedChartPie,
    PrefabricatedChartRose,
    PrefabricatedChartFunnel,
    PrefabricatedChartRadar,
    PrefabricatedChartSankey,
    PrefabricatedChartSequence,
    PrefabricatedChartWordCloud,
    PrefabricatedChartGauge,
    PrefabricatedChartLinearProgress,
    PrefabricatedChartCircularProgress,
    PrefabricatedChartTreemap,
    PrefabricatedChartWaterfall,
    PrefabricatedChartCirclePacking,
    PrefabricatedChartSunburst,
    PrefabricatedChartCorrelation,
    PrefabricatedChartLiquid,
    PrefabricatedChartVenn,
    PrefabricatedChartMosaic,
    PrefabricatedChartCandlestick,
    PrefabricatedChartGantt,
};