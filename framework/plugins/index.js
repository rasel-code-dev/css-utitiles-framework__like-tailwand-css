
const alignContent = require("./alignContent")
const alignItems  =  require('./alignItems')
const alignSelf = require("./alignSelf")

const backgroundColor  =  require('./backgroundColor')
const backgroundOpacity  =  require('./backgroundOpacity')
const textColor  =  require('./textColor')
const container = require("./container")
const cursor = require("./cursor")
const display  =  require('./display')

const fontWeight  =  require('./fontWeight')

const justifyContent  =  require('./justifyContent')
const justifyItems  =  require('./justifyItems')
const justifySelf = require("./justifySelf")

const margin  =  require('./margin')
const padding  =  require('./padding')
const borderRadius = require("./borderRadius");
const boxShadow = require("./boxShadow");
const boxSizing = require("./boxSizing");

const divideColor = require("./divideColor")
const divideWidth = require("./divideWidth")
const divideOpacity = require("./divideOpacity")

const flex = require("./flex")
const flexDirection = require("./flexDirection");
const flexWrap = require("./flexWrap");
const fontSize = require("./fontSize");
const lineHeight = require("./lineHeight");
const opacity  = require("./opacity")
const outline = require("./outline")
const order = require("./order")
const overflow  = require("./overflow")
const pointerEvents = require("./pointerEvents");
const position = require("./position")
const positionState = require("./positionState")
const placeholderColor = require("./placeholderColor")
const placeholderOpacity = require("./placeholderOpacity")
const textAlign = require("./textAlign");
const textDecoration = require("./textDecoration");
const userSelect = require("./userSelect");
const whitespace = require("./whitespace");
const zIndex = require("./zIndex")

const width = require("./width");
const minWidth = require("./minWidth");
const maxWidth = require("./maxWidth");

const height = require("./height");
const minHeight = require("./minHeight");
const maxHeight = require("./maxHeight");
const borderColor = require("./borderColor");
const borderWidth = require("./borderWidth");
const textOpacity = require("./textOpacity");
const borderOpacity = require("./borderOpacity");
const gap = require("./gap")
const gridTemplateColumns = require("./gridTemplateColumns")
const gridTemplateRows = require("./gridTemplateRows")
const gridAutoFlow = require("./gridAutoFlow")
const gridColumn = require("./gridColumn")
const gridColumnStart = require("./gridColumnStart")
const gridColumnEnd = require("./gridColumnEnd")
const gridAutoColumns = require("./gridAutoColumns")
const gridAutoRows = require("./gridAutoRows")

const transform = require("./transform")
const translate = require("./translate")
const space = require("./space")



module.exports = {
    alignItems,
    alignSelf,
    alignContent,
    backgroundColor,
    backgroundOpacity,
    textColor,
    textOpacity,
    borderColor,
    borderOpacity,
    borderWidth,
    borderRadius,
    boxSizing,
    boxShadow,
    // container,  // not implement yet
    cursor,
    display,
    divideColor,
    divideWidth,
    divideOpacity,
    justifyContent,
    justifyItems,
    justifySelf,
    margin,
    flex,
    flexDirection,
    flexWrap,
    fontSize,
    fontWeight,
    gap,
    gridTemplateColumns,
    gridTemplateRows,
    gridAutoFlow,
    gridColumn,
    gridColumnStart,
    gridColumnEnd,
    gridAutoColumns,
    gridAutoRows,
    lineHeight,
    opacity,
    order,
    outline,
    overflow,
    padding,
    pointerEvents,
    position,
    positionState,
    placeholderColor,
    placeholderOpacity,
    space,
    transform,
    translate,
    textAlign,
    textDecoration,
    userSelect,
    whitespace,
    zIndex,
    width,
    minWidth,
    maxWidth,
    height,
    minHeight,
    maxHeight
}



// container	None	width: 100%;
// sm (640px)	max-width: 640px;
// md (768px)	max-width: 768px;
// lg (1024px)	max-width: 1024px;
// xl (1280px)	max-width: 1280px;
// xxl (1536px)	max-width: 1536px;