// function chessboard(){
//     var board ="";
//     for(let row = 1; row <= 8; row ++){
//         for(let col=1; col<=8; col++){
//             if(row%2 == 1){
//                 if(col%2 ==1){
//                     board+="#";
//                 }else{
//                     board+=" ";
//                 }
                
//             }else{
//                 if(col%2 ==1){
//                     board+=" ";
//                 }else{
//                     board+="#";
//                 }
                
//             }
            
//         }
//         board+="\n";
        
        
//     }
//     console.log(board);
// }

function chessboard(num){
    var board ="";
    for(let row = 1; row <= num; row ++){
        for(let col=1; col<=num; col++){
            if(row%2 == 1){
                if(col%2 ==1){
                    board+="#";
                }else{
                    board+=" ";
                }
                
            }else{
                if(col%2 ==1){
                    board+=" ";
                }else{
                    board+="#";
                }
                
            }
            
        }
        board+="\n";
        
        
    }
    console.log(board);
}


chessboard(6);