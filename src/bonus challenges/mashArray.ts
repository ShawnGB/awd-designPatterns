const meshArray = (arr1: any[], arr2: any[]): any[] => {
  const meshArr: any[] = [];

  for (let i = 0; i < arr1.length; i++) {
    meshArr.push(arr1[i]);
    meshArr.push(arr2[i]);
  }

  return meshArr;
};
