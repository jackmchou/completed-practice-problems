function random_range(start_num, end_num) {
  if (Array.isArray(start_num) && end_num === undefined) {
    return start_num[Math.round(Math.random() * start_num.length)];
  }
  return Math.round(Math.random() * (end_num - start_num) + start_num);
}
random_range(2,15);
random_range(1,100);
random_range(['a','b','c','d','e'])
