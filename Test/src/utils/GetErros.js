export default function GetErros(erros){
  const validatedErros  = {};

  erros.inner.forEach(err=>{
    validatedErros [err.path] = err.message;
  })

  return validatedErros ;
}
