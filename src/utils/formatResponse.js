const formatResponse = (text) => {
   return text
     .replace(/\*\*\*/g, '**<br>') 
     .replace(/\*(.*?)\*\*/g, '<br>*$1**') 
     .replace(/\*\*(.*?)\*\*/g, '<b>$1</b>') 
     .replace(/\*(.*?)\*/g, '<br>$1<br>');
}
 export default formatResponse;
 