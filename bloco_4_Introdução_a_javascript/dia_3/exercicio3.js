let n = 5
let asterisco = "*";

for(let linha = 1; linha <= n; linha++){
    let saída = ""
for(let coluna = 1; coluna <= n; coluna++){
        if(coluna <= n- linha){
            saída += " "
        } else {
            saída += asterisco
        }
    }
    console.log(saída);
}
