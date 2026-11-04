function verifyInputs() {
            
                
                const Fcu = parseFloat(document.getElementById("Fcu").value);

                const Fy = parseFloat(document.getElementById("Fy").value);

                const thickness_slab = parseFloat(document.getElementById("thickness_slab").value);

                const concrete_cover = parseFloat(document.getElementById("concrete_cover").value);

                const diameter_rebar = parseFloat(document.getElementById("diameter_rebar").value);

                const Ultimate_load = parseFloat(document.getElementById("ultimate_load").value);

                const Ly = parseFloat(document.getElementById("Ly").value);

                const Lx = parseFloat(document.getElementById("Lx").value);

                const effective_depth = thickness_slab - concrete_cover-diameter_rebar / 2 ;

                const summary = ` 
                    Characteristic strength of concrete (Fcu): ${Fcu} N/mm^2\n
                    Characteristic strength of steel (Fy): ${Fy} N/mm^2\n
                    
                    Thickness of slab: ${thickness_slab} mm\n

                    concrete cover: ${concrete_cover} mm\n

                    Effective depth of slab: ${effective_depth} mm\n

                    Ultimate_load : ${Ultimate_load} kN/m^2\n

                    Length of Longer side (Ly): ${Ly} m\n

                    Length of Shorter side (Lx):  ${Lx} m\n
                    `;

                    const confirmed = confirm("Please review the input values:\n\n" + summary + "\nAre all the inputs correct?");

                    const resultDiv = document.getElementById("result");

                    if (confirmed) {
                        const R = Ly / Lx;
                        resultDiv.textContent = `The ratio of Ly/Lx is: ${R.toFixed(3)}`;
                        const effective_depth = thickness_slab - concrete_cover - diameter_rebar / 2;
                        resultDiv.textContent = `The effective depth is: ${effective_depth.toFixed(3)}`;
                    } else {
                        resultDiv.textContent = "Please recheck your input values and try agian.";
     
                    }

}

function verifyCoeff(){
    const C1 = parseFloat(document.getElementById("C1").value);

    const C2 = parseFloat(document.getElementById("C2").value);

    const c1 = parseFloat(document.getElementById("c1").value);

    const c2 = parseFloat(document.getElementById("c2").value);

    const Ls = parseFloat(document.getElementById("Ls").value);

    const Ssx = parseFloat(document.getElementById("Ssx").value);

    const R = Ls / Ssx;

    const summary = `
        first value = ${C1}
        second value = ${C2}
        first coeff = ${c1}
        second coeff = ${c2}
        Ls = ${Ls}
        Ssx = ${Ssx}
    `;
    
    const confirmed = confirm("Please review the input values:\n\n" + summary + "\nAre all the inputs correct?")

    const resultbox = document.getElementById("result2");

    if (confirmed) {
        const coeff = ((R - C1)/(C2 - R)) * (c2 - c1) + c1;
        resultbox.textContent = `The coeff is: ${coeff.toFixed(3)}`
    } else {
        resultbox.textContent = `Please recheck yours values and input correctly.`;
    }


}

function verifyBM(){
    const Px = parseFloat(document.getElementById("px").value);

    const Sx = parseFloat(document.getElementById("Sx").value);

    const UL = parseFloat(document.getElementById("UL").value);

    const summary = `
       Px = ${Px}

       Sx = ${Sx}

       UL = ${UL}
    `;

    const confirmed = confirm("Please review the input values:\n\n" + summary + "\nAre all the inputs correct?")

    const resultbm = document.getElementById("result3");

    if(confirmed) {
        const BM = Px * Sx * Sx * UL
        resultbm.textContent = `The bending moment is: ${BM.toFixed(3)}`
    } else {
        resultbm.textContent = `Please recheck yours values and input correctly.`;
    }

}