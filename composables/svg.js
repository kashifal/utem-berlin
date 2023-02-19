export const useSvgZnniPassLubri1TransNarrow = (project) => {
    return `
    <!-- galvanisch pass trans gleit trans 2 2col-->
    <svg class="w-[90%]" x="0px" y="0px" viewBox="0 0 550 608" style="enable-background:new 0 0 550 608;"
        xml:space="preserve">
        <svg id="substrat" x="0px">
            <polygon class="ls-substrat-dark" points="186.56,385.5 0,306.15 0,257.98 186.56,337.34 			" />
            <polygon class="ls-substrat-light" points="368.5,306.15 186.56,385.5 186.56,337.34 368.5,257.98 			" />
            <polygon class="ls-substrat-face" points="0.13,257.98 187.11,337.34 368.06,257.98 184.53,178.63 		" />
        </svg>
        <svg id="corr1" x="0px" y="0px">
            <polygon class="ls-corrZnni-dark" points="186.56,317.93 0,238.57 0,221.43 186.56,300.78 			" />
            <polygon class="ls-corrZnni-light" points="368.5,238.57 186.56,317.93 186.56,300.78 368.5,221.43 			" />
            <polygon class="ls-corrZnni-face" points="0.13,221.43 187.11,300.78 368.06,221.42 184.53,142.07 		" />
        </svg>
        <svg id="corr2" x="0px" y="8px" style="opacity: 0.3">
            <polygon class="ls-corrPassTrans-dark" points="186.56,279.83 0,195.72 0,188.07 186.56,272.18 			" />
            <polygon class="ls-corrPassTrans-light" points="368.5,195.72 186.56,279.83 186.56,272.18 368.5,188.07 			" />
            <polygon class="ls-corrPassTrans-face" points="0.13,188.07 187.11,272.18 368.06,188.07 184.53,103.97 		" />
        </svg>
        <svg id="top1" x="0px" y="5px" style="opacity: 0.5">
            <polygon class="ls-topGleitTrans-dark" points="186.56,250.52 0,166.41 0,158.76 186.56,242.87 			" />
            <polygon class="ls-topGleitTrans-light" points="368.5,166.41 186.56,250.52 186.56,242.87 368.5,158.76 			" />
            <polygon class="ls-topGleitTrans-face" points="0.13,158.76 187.11,242.87 368.06,158.76 184.53,74.66 		" />
        </svg>
        
        
        <text transform="matrix(1 0 0 1 395 168)" text-anchor="start" class="ls-headline">Gleitlack
            ${project.coating.coatingProduct.product}</text>
        <text transform="matrix(1 0 0 1 395 218)" text-anchor="start" class="ls-headline">Passivierung</text>
        <text transform="matrix(1 0 0 1 395 233)" text-anchor="start"
            class="ls-headline">Zink-Nickel-Schicht</text>
        <text transform="matrix(1 0 0 1 395 285)" text-anchor="start" class="ls-headline">Substrat</text>
    </svg>
    `
}
export const useSvgZnniPassLubri1TransWide = (project) => {
    return `
    <!-- galvanisch pass trans gleit trans 1 1col-->
    <svg class="w-[70%] md:w-[60%] lg:w-[95%]" x="0px" y="0px" viewBox="0 0 410 608" style="enable-background:new 0 0 410 608;"
        xml:space="preserve">
        <svg id="substrat" x="0px">
            <polygon class="ls-substrat-dark" points="186.56,385.5 0,306.15 0,257.98 186.56,337.34 			" />
            <polygon class="ls-substrat-face" points="368.5,306.15 186.56,385.5 186.56,337.34 368.5,257.98 			" />
            <polygon class="ls-substrat-light" points="0.13,257.98 187.11,337.34 368.06,257.98 184.53,178.63 		" />
        </svg>
        <image v-if="coating.coatingProduct.color=='grey' && corrosion.corrosionProduct.color=='transparent'" ></image>
        <image v-if="coating.coatingProduct.color=='grey' && corrosion.corrosionProduct.color=='black'" style="overflow:visible;" width="1000" height="680" xlink:href="/img/customonepager/sec1/ls_znni_pass_black_top_1gl_grey_01.png"  transform="matrix(1 0 0 1 43.867 -55.4391)"></image>
        <image v-if="coating.coatingProduct.color=='black' && corrosion.corrosionProduct.color=='transparent'" style="overflow:visible;" width="1000" height="680" xlink:href="/img/customonepager/sec1/ls_znni_pass_trans_top_1gl_black_01.png" transform="matrix(1 0 0 1 43.867 -55.4391)"></image>
        <image v-if="coating.coatingProduct.color=='black' && corrosion.corrosionProduct.color=='black'" style="overflow:visible;" width="1000" height="680" xlink:href="/img/customonepager/sec1/ls_znni_pass_black_top_1gl_black_01.png"  transform="matrix(1 0 0 1 43.867 -55.4391)"></image>
        
        
        <svg id="corr1" x="0px" y="0px">
            <polygon class="ls-corrZnni-dark" points="186.56,317.93 0,238.57 0,221.43 186.56,300.78 			" />
            <polygon class="ls-corrZnni-light" points="368.5,238.57 186.56,317.93 186.56,300.78 368.5,221.43 			" />
            <polygon class="ls-corrZnni-face" points="0.13,221.43 187.11,300.78 368.06,221.42 184.53,142.07 		" />
        </svg>
        
        <!--<svg id="corr2" style="opacity: 0.3" v-if="coating.coatingProduct.color=='grey' && corrosion.corrosionProduct.color=='transparent'"  x="0px" y="8px">
            <polygon class="ls-corrPassTrans-dark" points="186.56,279.83 0,195.72 0,188.07 186.56,272.18 			" />
            <polygon class="ls-corrPassTrans-light" points="368.5,195.72 186.56,279.83 186.56,272.18 368.5,188.07 			" />
            <polygon class="ls-corrPassTrans-face" points="0.13,188.07 187.11,272.18 368.06,188.07 184.53,103.97 		" />
        </svg>-->
        
        <svg id="corr2" style="opacity: 0.3" v-if="coating.coatingProduct.color=='grey' && corrosion.corrosionProduct.color=='transparent'"  x="0px" y="8px">
            <polygon class="ls-corrPassTrans-dark" points="186.56,279.83 0,195.72 0,188.07 186.56,272.18 			" />
            <polygon class="ls-corrPassTrans-light" points="368.5,195.72 186.56,279.83 186.56,272.18 368.5,188.07 			" />
            <polygon class="ls-corrPassTrans-face" points="0.13,188.07 187.11,272.18 368.06,188.07 184.53,103.97 		" />
        </svg>
        
        <svg id="top1" x="0px" y="5px" style="opacity: 0.5">
            <polygon class="ls-topGleitTrans-dark" points="186.56,250.52 0,166.41 0,158.76 186.56,242.87 			" />
            <polygon class="ls-topGleitTrans-light" points="368.5,166.41 186.56,250.52 186.56,242.87 368.5,158.76 			" />
            <polygon class="ls-topGleitTrans-face" points="0.13,158.76 187.11,242.87 368.06,158.76 184.53,74.66 		" />
        </svg>
      
        <text transform="matrix(1 0 0 1 390 9)" text-anchor="end" class="ls-headline">Deckschicht</text>
        
        <circle class="ls-circle" cx="380" cy="167" r="1.8" />
        <line class="ls-line" x1="380" y1="167" x2="410" y2="167" />
        <line class="ls-line" x1="410" y1="167" x2="410" y2="20" />
        <line class="ls-line" x1="393" y1="20" x2="410" y2="20" />
        <text transform="matrix(1 0 0 1 390 25)" text-anchor="end" class="ls-subline">Gleitlack
            ${project.coating.coatingProduct.product}</text>
        
        <text transform="matrix(1 0 0 1 390 385)" text-anchor="end"
            class="ls-headline">Korrosionsschutzsystem</text>
        <circle class="ls-circle" cx="380" cy="230" r="1.8" />
        <line class="ls-line" x1="380" y1="230" x2="400" y2="230" />
        <line class="ls-line" x1="400" y1="230" x2="400" y2="398" />
        <line class="ls-line" x1="393" y1="398" x2="400" y2="398" />
        <text transform="matrix(1 0 0 1 390 400)" text-anchor="end"
            class="ls-subline">Zink-Nickel-Schicht</text>

        <circle class="ls-circle" cx="380" cy="200" r="1.8" />
        <line class="ls-line" x1="380" y1="200" x2="410" y2="200" />
        <line class="ls-line" x1="410" y1="200" x2="410" y2="430" />
        <line class="ls-line" x1="393" y1="430" x2="410" y2="430" />
        <text transform="matrix(1 0 0 1 390 433)" text-anchor="end" class="ls-subline">Passivierung</text>
    </svg>
    `
}

export const useSvgZnniPassLubri2TransNarrow = (project) => {
    return `
    <!-- galvanisch pass trans gleit trans 2 2col-->
    <svg class="w-[90%]" x="0px" y="0px" viewBox="0 0 550 608" style="enable-background:new 0 0 550 608;"
        xml:space="preserve">
        <svg id="substrat" x="0px">
            <polygon class="ls-substrat-dark" points="186.56,385.5 0,306.15 0,257.98 186.56,337.34 			" />
            <polygon class="ls-substrat-light" points="368.5,306.15 186.56,385.5 186.56,337.34 368.5,257.98 			" />
            <polygon class="ls-substrat-face" points="0.13,257.98 187.11,337.34 368.06,257.98 184.53,178.63 		" />
        </svg>
        <svg id="corr1" x="0px" y="0px">
            <polygon class="ls-corrZnni-dark" points="186.56,317.93 0,238.57 0,221.43 186.56,300.78 			" />
            <polygon class="ls-corrZnni-light" points="368.5,238.57 186.56,317.93 186.56,300.78 368.5,221.43 			" />
            <polygon class="ls-corrZnni-face" points="0.13,221.43 187.11,300.78 368.06,221.42 184.53,142.07 		" />
        </svg>
        <svg id="corr2" x="0px" y="8px" style="opacity: 0.3">
            <polygon class="ls-corrPassTrans-dark" points="186.56,279.83 0,195.72 0,188.07 186.56,272.18 			" />
            <polygon class="ls-corrPassTrans-light" points="368.5,195.72 186.56,279.83 186.56,272.18 368.5,188.07 			" />
            <polygon class="ls-corrPassTrans-face" points="0.13,188.07 187.11,272.18 368.06,188.07 184.53,103.97 		" />
        </svg>
        <svg id="top1" x="0px" y="5px" style="opacity: 0.5">
            <polygon class="ls-topGleitTrans-dark" points="186.56,250.52 0,166.41 0,158.76 186.56,242.87 			" />
            <polygon class="ls-topGleitTrans-light" points="368.5,166.41 186.56,250.52 186.56,242.87 368.5,158.76 			" />
            <polygon class="ls-topGleitTrans-face" points="0.13,158.76 187.11,242.87 368.06,158.76 184.53,74.66 		" />
        </svg>
        <svg id="top2" x="0px" y="-25px" style="opacity: 0.5">
            <polygon class="ls-topGleitTrans-dark" points="186.56,250.52 0,166.41 0,158.76 186.56,242.87 			" />
            <polygon class="ls-topGleitTrans-light" points="368.5,166.41 186.56,250.52 186.56,242.87 368.5,158.76 			" />
            <polygon class="ls-topGleitTrans-face" points="0.13,158.76 187.11,242.87 368.06,158.76 184.53,74.66 		" />
        </svg>

        <text transform="matrix(1 0 0 1 395 139)" text-anchor="start" class="ls-headline">Gleitlack
            ${project.coating.coatingProduct.product}</text>
        <text transform="matrix(1 0 0 1 500 139)" text-anchor="start" class="ls-schicht">2. Schicht</text>
        <text transform="matrix(1 0 0 1 395 168)" text-anchor="start" class="ls-headline">Gleitlack
            ${project.coating.coatingProduct.product}</text>
        <text transform="matrix(1 0 0 1 500 168)" text-anchor="start" class="ls-schicht">1. Schicht</text>
        <text transform="matrix(1 0 0 1 395 208)" text-anchor="start" class="ls-headline">Passivierung</text>
        <text transform="matrix(1 0 0 1 395 233)" text-anchor="start"
            class="ls-headline">Zink-Nickel-Schicht</text>
        <text transform="matrix(1 0 0 1 395 285)" text-anchor="start" class="ls-headline">Substrat</text>
    </svg>
    `
}
export const useSvgZnniPassLubri2TransWide = (project) => {
    return `
    <!-- galvanisch pass trans gleit trans 2 1col-->
    <svg class="w-[70%] md:w-[60%] lg:w-[95%]" x="0px" y="0px" viewBox="0 0 410 608" style="enable-background:new 0 0 410 608;"
        xml:space="preserve">
        <svg id="substrat" x="0px">
            <polygon class="ls-substrat-dark" points="186.56,385.5 0,306.15 0,257.98 186.56,337.34 			" />
            <polygon class="ls-substrat-face" points="368.5,306.15 186.56,385.5 186.56,337.34 368.5,257.98 			" />
            <polygon class="ls-substrat-light" points="0.13,257.98 187.11,337.34 368.06,257.98 184.53,178.63 		" />
        </svg>
        <svg id="corr1" x="0px" y="0px">
            <polygon class="ls-corrZnni-dark" points="186.56,317.93 0,238.57 0,221.43 186.56,300.78 			" />
            <polygon class="ls-corrZnni-light" points="368.5,238.57 186.56,317.93 186.56,300.78 368.5,221.43 			" />
            <polygon class="ls-corrZnni-face" points="0.13,221.43 187.11,300.78 368.06,221.42 184.53,142.07 		" />
        </svg>
        <svg id="corr2" x="0px" y="8px" style="opacity: 0.3">
            <polygon class="ls-corrPassTrans-dark" points="186.56,279.83 0,195.72 0,188.07 186.56,272.18 			" />
            <polygon class="ls-corrPassTrans-light" points="368.5,195.72 186.56,279.83 186.56,272.18 368.5,188.07 			" />
            <polygon class="ls-corrPassTrans-face" points="0.13,188.07 187.11,272.18 368.06,188.07 184.53,103.97 		" />
        </svg>
        <svg id="top1" x="0px" y="5px" style="opacity: 0.5">
            <polygon class="ls-topGleitTrans-dark" points="186.56,250.52 0,166.41 0,158.76 186.56,242.87 			" />
            <polygon class="ls-topGleitTrans-light" points="368.5,166.41 186.56,250.52 186.56,242.87 368.5,158.76 			" />
            <polygon class="ls-topGleitTrans-face" points="0.13,158.76 187.11,242.87 368.06,158.76 184.53,74.66 		" />
        </svg>
        <svg id="top2" x="0px" y="-25px" style="opacity: 0.5">
            <polygon class="ls-topGleitTrans-dark" points="186.56,250.52 0,166.41 0,158.76 186.56,242.87 			" />
            <polygon class="ls-topGleitTrans-light" points="368.5,166.41 186.56,250.52 186.56,242.87 368.5,158.76 			" />
            <polygon class="ls-topGleitTrans-face" points="0.13,158.76 187.11,242.87 368.06,158.76 184.53,74.66 		" />
        </svg>

        <circle class="ls-circle" cx="380" cy="137" r="1.8" />
        <line class="ls-line" x1="380" y1="137" x2="400" y2="137" />
        <line class="ls-line" x1="400" y1="137" x2="400" y2="37" />
        <line class="ls-line" x1="393" y1="37" x2="400" y2="37" />
        <text transform="matrix(1 0 0 1 390 9)" text-anchor="end" class="ls-headline">Deckschicht</text>
        <text transform="matrix(1 0 0 1 340 25)" text-anchor="end" class="ls-subline">Gleitlack
            ${project.coating.coatingProduct.product}</text>
        <text transform="matrix(1 0 0 1 390 25)" text-anchor="end" class="ls-schicht">Schicht1</text>

        <circle class="ls-circle" cx="380" cy="167" r="1.8" />
        <line class="ls-line" x1="380" y1="167" x2="410" y2="167" />
        <line class="ls-line" x1="410" y1="167" x2="410" y2="20" />
        <line class="ls-line" x1="393" y1="20" x2="410" y2="20" />
        <text transform="matrix(1 0 0 1 340 40)" text-anchor="end" class="ls-subline">Gleitlack
            ${project.coating.coatingProduct.product}</text>
        <text transform="matrix(1 0 0 1 390 40)" text-anchor="end" class="ls-schicht">Schicht2</text>

        <text transform="matrix(1 0 0 1 390 385)" text-anchor="end"
            class="ls-headline">Korrosionsschutzsystem</text>
        <circle class="ls-circle" cx="380" cy="230" r="1.8" />
        <line class="ls-line" x1="380" y1="230" x2="400" y2="230" />
        <line class="ls-line" x1="400" y1="230" x2="400" y2="398" />
        <line class="ls-line" x1="393" y1="398" x2="400" y2="398" />
        <text transform="matrix(1 0 0 1 390 400)" text-anchor="end"
            class="ls-subline">Zink-Nickel-Schicht</text>

        <circle class="ls-circle" cx="380" cy="200" r="1.8" />
        <line class="ls-line" x1="380" y1="200" x2="410" y2="200" />
        <line class="ls-line" x1="410" y1="200" x2="410" y2="430" />
        <line class="ls-line" x1="393" y1="430" x2="410" y2="430" />
        <text transform="matrix(1 0 0 1 390 433)" text-anchor="end" class="ls-subline">Passivierung</text>
    </svg>
    `
}

