function do_math(num1, num2, string) {
  if (string === '+') {
    return num1 + num2;
  } else if (string === '-') {
    return num1 - num2;
  } else if (string === '/') {
    return num1 / num2;
  } else if (string === '*' || 'x' || 'X') {
    return num1 * num2;
  }
}
