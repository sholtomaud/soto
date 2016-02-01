var defaultPadding = '10px',
    alphaFontFamily = 'Dancing',
    primaryFontFamily = 'SpecialElite',
    secondaryFontFamily = 'Roboto';

module.exports = {
     "defaultStyle":{   
        "startDate": {
            "style": { 
                "color" : "purple",
                "font-family" : "Roboto"
            },
            "showLabel":true,
            "label": "Start Date"
        },
        "endDate":{
            "style": { 
                "color" : "red",
                "font-family" : "Roboto"
            },
            "showLabel":true,
            "label": "End Date"
        },
        "basics": {
            "style": { 
                "color" : "blue",
                "font-family" : "Roboto"
            },
            "show":false,
            "label": "Basics"
        }, "profiles": {
            "style": { 
                "color" : "blue",
                "font-family" : "Roboto"
            },
            "show":true,
            "label": "Profiles"
        },"address": {
            "style": { 
                "color" : "blue",
                "font-family" : "Roboto"
            },
            "show":true,
            "label": "Contact"
        },"postalCode": {
            "style": { 
                "color" : "green",
                "font-family" : "Roboto"
            },
            "show":true,
            "label": "Postcode"
        },"work": {
            "style": { 
                "color" : "red",
                "font-family" : "Roboto"
            },
            "show":true,
            "label": "Work Experience"
        },"volunteer": {
            "style": { 
                "color" : "lightGreen",
                "font-family" : "Arial"
            },
            "show":true,
            "label": "Volunteer Experience"
        },"education": {
            "style": { 
                "color" : "lightGreen",
                "font-family" : "Roboto"
            },
            "show":true,
            "label": "Education"
        },"awards": {
            "style": { 
                "color" : "green",
                "font-family" : "Courier"
            },
            "show":false,
            "label": "Awards"
        },"publications": {
            "style": { 
                "color" : "red",
                "font-family" : "Roboto"
            }
        },"skills": {
            "style": { 
                "color" : "blue",
                "font-family" : "Roboto"
            },
            "show":false,
            "label": "Skills"
        },"languages": {
            "style": { 
                "color" : "blue",
                "font-family" : "Roboto"
            },
            "show":false,
            "label": "Languages"
        },"interests": {
            "style": { 
                "color" : "blue",
                "font-family" : "Roboto"
            },
            "show":false,
            "label": "Interests"
        },"references": {
            "style": { 
                "color" : "blue",
                "font-family" : "Roboto"
            },
            "show":true,
            "label": "References"
        },
        "resumeSection":{
            "style":{
                "padding-bottom": defaultPadding,
                "display": "flex",
                "flex-direction": "column",
                "justify-content": "flex-start",
                "align-items": "strech",
                "color": "black",
                "font-family": alphaFontFamily
            },
            "show":true
            
        },
        "paragraph":{
            "style":{
                "padding-bottom": defaultPadding,
                "display": "flex",
                "flex-direction": "column",
                "justify-content": "flex-start",
                "align-items": "strech",
                "color": "blue",
                "font-family": alphaFontFamily 
            },
            "show":true
        },
        "item":{
            "style": {
                "padding-bottom": defaultPadding,
                "display": "flex",
                "flex-direction": "row",
                "justify-content": "flex-start",
                // "align-items": "strech",
                "color": "yellow",
                "font-size" : "10px",
                "font-family": alphaFontFamily 
            },
            "show":true
        },
        "title": { 
            "style":{
                "color" : "green",
                "font-family" : secondaryFontFamily,
                "font-size" : "20px"
            },
            "show":true
        },
        "sectionTitle": { 
            "style":{
                "color" : "red",
                "font-family" : secondaryFontFamily,
                "font-size" : "20px"
            },
            "show":true
        },
    }
}


// "$schema": "http://json-schema.org/draft-04/schema#",
//     "title": "Resume Style",
//     "type": "object",
//     "additionalProperties": false,
//     "properties": {
//         "type": "object",
//         "additionalProperties": true,
//         "properties": {
//             "title": {
//                 "type": "string",
//                 "description":"Resume title styling"
//             },
//             "section": {
//                 "type": "string",
//                 "description": "Generic styling container for a section of the Resume, Work, Volunteer etc."
//             },
//             "sectionTitle": {
//                 "type": "string",
//                 "description": "Section title styling, Work, etc."
//             },
//             "itemKey": {
//                 "type": "string",
//                 "description": "Label styling"

//             },
//             "itemValue": {
//                 "type": "string",
//                 "description": "Phone numbers are stored as strings so use any format you like, e.g. 712-117-2923"
//             }
//         }
//     }





// Name    Values  Initial value   Applies to
// (Default: all)  Inherited?  Percentages
// (Default: N/A)  Media groups
// 'azimuth'   <angle> | [[ left-side | far-left | left | center-left | center | center-right | right | far-right | right-side ] || behind ] | leftwards | rightwards | inherit    center      yes     aural
// 'background-attachment' scroll | fixed | inherit    scroll      no      visual
// 'background-color'  <color> | transparent | inherit transparent     no      visual
// 'background-image'  <uri> | none | inherit  none        no      visual
// 'background-position'   [ [ <percentage> | <length> | left | center | right ] [ <percentage> | <length> | top | center | bottom ]? ] | [ [ left | center | right ] || [ top | center | bottom ] ] | inherit 0% 0%       no  refer to the size of the box itself visual
// 'background-repeat' repeat | repeat-x | repeat-y | no-repeat | inherit  repeat      no      visual
// 'background'    ['background-color' || 'background-image' || 'background-repeat' || 'background-attachment' || 'background-position'] | inherit see individual properties       no  allowed on 'background-position'    visual
// 'border-collapse'   collapse | separate | inherit   separate    'table' and 'inline-table' elements yes     visual
// 'border-color'  [ <color> | transparent ]{1,4} | inherit    see individual properties       no      visual
// 'border-spacing'    <length> <length>? | inherit    0   'table' and 'inline-table' elements     yes     visual
// 'border-style'  <border-style>{1,4} | inherit   see individual properties       no      visual
// 'border-top' 'border-right' 'border-bottom' 'border-left'   [ <border-width> || <border-style> || 'border-top-color' ] | inherit    see individual properties       no      visual
// 'border-top-color' 'border-right-color' 'border-bottom-color' 'border-left-color'   <color> | transparent | inherit the value of the 'color' property       no      visual
// 'border-top-style' 'border-right-style' 'border-bottom-style' 'border-left-style'   <border-style> | inherit    none        no      visual
// 'border-top-width' 'border-right-width' 'border-bottom-width' 'border-left-width'   <border-width> | inherit    medium      no      visual
// 'border-width'  <border-width>{1,4} | inherit   see individual properties       no      visual
// 'border'    [ <border-width> || <border-style> || 'border-top-color' ] | inherit    see individual properties       no      visual
// 'bottom'    <length> | <percentage> | auto | inherit    auto    positioned elements no  refer to height of containing block visual
// 'caption-side'  top | bottom | inherit  top 'table-caption' elements    yes     visual
// 'clear' none | left | right | both | inherit    none    block-level elements    no      visual
// 'clip'  <shape> | auto | inherit    auto    absolutely positioned elements  no      visual
// 'color' <color> | inherit   depends on user agent       yes     visual
// 'content'   normal | none | [ <string> | <uri> | <counter> | attr(<identifier>) | open-quote | close-quote | no-open-quote | no-close-quote ]+ | inherit    normal  :before and :after pseudo-elements  no      all
// 'counter-increment' [ <identifier> <integer>? ]+ | none | inherit   none        no      all
// 'counter-reset' [ <identifier> <integer>? ]+ | none | inherit   none        no      all
// 'cue-after' <uri> | none | inherit  none        no      aural
// 'cue-before'    <uri> | none | inherit  none        no      aural
// 'cue'   [ 'cue-before' || 'cue-after' ] | inherit   see individual properties       no      aural
// 'cursor'    [ [<uri> ,]* [ auto | crosshair | default | pointer | move | e-resize | ne-resize | nw-resize | n-resize | se-resize | sw-resize | s-resize | w-resize | text | wait | help | progress ] ] | inherit    auto        yes     visual, interactive
// 'direction' ltr | rtl | inherit ltr all elements, but see prose yes     visual
// 'display'   inline | block | list-item | inline-block | table | inline-table | table-row-group | table-header-group | table-footer-group | table-row | table-column-group | table-column | table-cell | table-caption | none | inherit  inline      no      all
// 'elevation' <angle> | below | level | above | higher | lower | inherit  level       yes     aural
// 'empty-cells'   show | hide | inherit   show    'table-cell' elements   yes     visual
// 'float' left | right | none | inherit   none    all, but see 9.7    no      visual
// 'font-family'   [[ <family-name> | <generic-family> ] [, <family-name>| <generic-family>]* ] | inherit  depends on user agent       yes     visual
// 'font-size' <absolute-size> | <relative-size> | <length> | <percentage> | inherit   medium      yes refer to inherited font size    visual
// 'font-style'    normal | italic | oblique | inherit normal      yes     visual
// 'font-variant'  normal | small-caps | inherit   normal      yes     visual
// 'font-weight'   normal | bold | bolder | lighter | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | inherit    normal      yes     visual
// 'font'  [ [ 'font-style' || 'font-variant' || 'font-weight' ]? 'font-size' [ / 'line-height' ]? 'font-family' ] | caption | icon | menu | message-box | small-caption | status-bar | inherit    see individual properties       yes see individual properties   visual
// 'height'    <length> | <percentage> | auto | inherit    auto    all elements but non-replaced inline elements, table columns, and column groups no  see prose   visual
// 'left'  <length> | <percentage> | auto | inherit    auto    positioned elements no  refer to width of containing block  visual
// 'letter-spacing'    normal | <length> | inherit normal      yes     visual
// 'line-height'   normal | <number> | <length> | <percentage> | inherit   normal      yes refer to the font size of the element itself    visual
// 'list-style-image'  <uri> | none | inherit  none    elements with 'display: list-item'  yes     visual
// 'list-style-position'   inside | outside | inherit  outside elements with 'display: list-item'  yes     visual
// 'list-style-type'   disc | circle | square | decimal | decimal-leading-zero | lower-roman | upper-roman | lower-greek | lower-latin | upper-latin | armenian | georgian | lower-alpha | upper-alpha | none | inherit    disc    elements with 'display: list-item'  yes     visual
// 'list-style'    [ 'list-style-type' || 'list-style-position' || 'list-style-image' ] | inherit  see individual properties   elements with 'display: list-item'  yes     visual
// 'margin-right' 'margin-left'    <margin-width> | inherit    0   all elements except elements with table display types other than table-caption, table and inline-table  no  refer to width of containing block  visual
// 'margin-top' 'margin-bottom'    <margin-width> | inherit    0   all elements except elements with table display types other than table-caption, table and inline-table  no  refer to width of containing block  visual
// 'margin'    <margin-width>{1,4} | inherit   see individual properties   all elements except elements with table display types other than table-caption, table and inline-table  no  refer to width of containing block  visual
// 'max-height'    <length> | <percentage> | none | inherit    none    all elements but non-replaced inline elements, table columns, and column groups no  see prose   visual
// 'max-width' <length> | <percentage> | none | inherit    none    all elements but non-replaced inline elements, table rows, and row groups   no  refer to width of containing block  visual
// 'min-height'    <length> | <percentage> | inherit   0   all elements but non-replaced inline elements, table columns, and column groups no  see prose   visual
// 'min-width' <length> | <percentage> | inherit   0   all elements but non-replaced inline elements, table rows, and row groups   no  refer to width of containing block  visual
// 'orphans'   <integer> | inherit 2   block container elements    yes     visual, paged
// 'outline-color' <color> | invert | inherit  invert      no      visual, interactive
// 'outline-style' <border-style> | inherit    none        no      visual, interactive
// 'outline-width' <border-width> | inherit    medium      no      visual, interactive
// 'outline'   [ 'outline-color' || 'outline-style' || 'outline-width' ] | inherit see individual properties       no      visual, interactive
// 'overflow'  visible | hidden | scroll | auto | inherit  visible block containers    no      visual
// 'padding-top' 'padding-right' 'padding-bottom' 'padding-left'   <padding-width> | inherit   0   all elements except table-row-group, table-header-group, table-footer-group, table-row, table-column-group and table-column no  refer to width of containing block  visual
// 'padding'   <padding-width>{1,4} | inherit  see individual properties   all elements except table-row-group, table-header-group, table-footer-group, table-row, table-column-group and table-column no  refer to width of containing block  visual
// 'page-break-after'  auto | always | avoid | left | right | inherit  auto    block-level elements (but see text) no      visual, paged
// 'page-break-before' auto | always | avoid | left | right | inherit  auto    block-level elements (but see text) no      visual, paged
// 'page-break-inside' avoid | auto | inherit  auto    block-level elements (but see text) no      visual, paged
// 'pause-after'   <time> | <percentage> | inherit 0       no  see prose   aural
// 'pause-before'  <time> | <percentage> | inherit 0       no  see prose   aural
// 'pause' [ [<time> | <percentage>]{1,2} ] | inherit  see individual properties       no  see descriptions of 'pause-before' and 'pause-after'    aural
// 'pitch-range'   <number> | inherit  50      yes     aural
// 'pitch' <frequency> | x-low | low | medium | high | x-high | inherit    medium      yes     aural
// 'play-during'   <uri> [ mix || repeat ]? | auto | none | inherit    auto        no      aural
// 'position'  static | relative | absolute | fixed | inherit  static      no      visual
// 'quotes'    [<string> <string>]+ | none | inherit   depends on user agent       yes     visual
// 'richness'  <number> | inherit  50      yes     aural
// 'right' <length> | <percentage> | auto | inherit    auto    positioned elements no  refer to width of containing block  visual
// 'speak-header'  once | always | inherit once    elements that have table header information yes     aural
// 'speak-numeral' digits | continuous | inherit   continuous      yes     aural
// 'speak-punctuation' code | none | inherit   none        yes     aural
// 'speak' normal | none | spell-out | inherit normal      yes     aural
// 'speech-rate'   <number> | x-slow | slow | medium | fast | x-fast | faster | slower | inherit   medium      yes     aural
// 'stress'    <number> | inherit  50      yes     aural
// 'table-layout'  auto | fixed | inherit  auto    'table' and 'inline-table' elements no      visual
// 'text-align'    left | right | center | justify | inherit   a nameless value that acts as 'left' if 'direction' is 'ltr', 'right' if 'direction' is 'rtl'   block containers    yes     visual
// 'text-decoration'   none | [ underline || overline || line-through || blink ] | inherit none        no (see prose)      visual
// 'text-indent'   <length> | <percentage> | inherit   0   block containers    yes refer to width of containing block  visual
// 'text-transform'    capitalize | uppercase | lowercase | none | inherit none        yes     visual
// 'top'   <length> | <percentage> | auto | inherit    auto    positioned elements no  refer to height of containing block visual
// 'unicode-bidi'  normal | embed | bidi-override | inherit    normal  all elements, but see prose no      visual
// 'vertical-align'    baseline | sub | super | top | text-top | middle | bottom | text-bottom | <percentage> | <length> | inherit baseline    inline-level and 'table-cell' elements  no  refer to the 'line-height' of the element itself    visual
// 'visibility'    visible | hidden | collapse | inherit   visible     yes     visual
// 'voice-family'  [[<specific-voice> | <generic-voice> ],]* [<specific-voice> | <generic-voice> ] | inherit   depends on user agent       yes     aural
// 'volume'    <number> | <percentage> | silent | x-soft | soft | medium | loud | x-loud | inherit medium      yes refer to inherited value    aural
// 'white-space'   normal | pre | nowrap | pre-wrap | pre-line | inherit   normal      yes     visual
// 'widows'    <integer> | inherit 2   block container elements    yes     visual, paged
// 'width' <length> | <percentage> | auto | inherit    auto    all elements but non-replaced inline elements, table rows, and row groups   no  refer to width of containing block  visual
// 'word-spacing'  normal | <length> | inherit normal      yes     visual
// 'z-index'