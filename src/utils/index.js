function isChinese(temp) 
{ 
	var re = /[^\u4e00-\u9fa5]/; 
	if(re.test(temp)) return false; 
	return true; 
}

const isContainChinese = temp => {
  let cnt = 0;
  for (let i = 0; i < temp.length; i++) {
    if (isChinese(temp.charAt(i))) cnt++;
  }
  return cnt > 5;
};


export {
  isContainChinese
}