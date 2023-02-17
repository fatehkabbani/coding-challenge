const maximumWealth = function(accounts) {
    let resault=0;
   accounts.forEach(item=>{
      let res=item.reduce((acc,prev)=>{
           return acc+prev;
       },0);
       resault=Math.max(resault,res);
   })
   return resault;
};