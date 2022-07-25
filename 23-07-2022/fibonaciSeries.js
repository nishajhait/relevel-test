function fibonaciSeries(num){
    var result;
     if(n<1)return -1;
     if(n==1)return 0;
     if( n==2)return 1;
     var b=1;
   
     let i =2;
     let series =[0,1]
    while(i<=num){
        let newNum = series[i-1]+series[i-2];
        series.push=(newNum);
      i++;
    }
    console.log(series[i-1]);
}
fibonaciSeries(5)