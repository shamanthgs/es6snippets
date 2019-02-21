const columns = {
  'col1': {visible:false},
  'col2': {visible:true},
  'col3': {visible:true},
}

const availableColumns = Object.keys(columns || {})
    .filter(col => columns[col] && columns[col].visible)
    .reduce(
      (cols, col) => ({
        ...cols,
        [col]: columns[col]
      }),
      {}
    );

let result={};
for(let c in columns){
  if(columns[c].visible){
    result[c] = columns[c];
  }
}


console.log(result);
console.log(availableColumns);