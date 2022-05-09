var twoSum = function(nums, target) {
    
    const dic = {};
  
    nums.forEach((currentValue, index)=>{
        
        dic[target-currentValue] = index;

        if(dic.hasOwnProperty(currentValue)){
            console.log([dic[currentValue], index]);
        } 
    });    
  };




  example = [3,3]

  //twoSum(example, 8);

twoSum(example, 6);