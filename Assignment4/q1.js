const table_1=document.getElementsByTagName('table')[0];
//const n = table_1.tHead.rows.length;

table_1.tHead.rows[0].style.backgroundColor='#ff6547';
table_1.tHead.rows[1].style.backgroundColor='#e45367';
// const m = table_1.tBodies[0].rows.length;
// //let k=1;
// for(let i=0;i<m;i++){
//     table_1.tBodies[0].rows[i].style.backgroundColor='blue';
//     k++;
// }
table_1.tBodies[0].rows[0].style.backgroundColor='blue';
table_1.tBodies[0].rows[1].style.backgroundColor='orange';
table_1.tBodies[0].rows[2].style.backgroundColor='green';
table_1.tBodies[0].rows[3].style.backgroundColor='yellow';
table_1.tBodies[0].rows[4].style.backgroundColor='pink';
for(let i=0;i<5;i++){
    for(let j=0;j<5;j++){
        if((i+j)%2!=0){
            console.log(table_1.tBodies[0].rows[i].cells[j].innerText);
        }  
    }
}