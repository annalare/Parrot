export function formataData(data: Date): string {
  return (
    `${`00${data.getDate()}`.slice(-2)}/${`00${data.getMonth() + 1}`.slice(
      -2
    )}/${data.getFullYear()}` +
    ` às ${data.getHours()}:${`00${data.getMinutes()}`.slice(-2)}`
  );
}
