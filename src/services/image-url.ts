const getCroppedImage = (url :string) => {
  
  if(!url) return '';
  
  const index =  url.indexOf('media/');
  const newURL = url.slice(0, index + 6) + 'crop/600/400/' + url.slice(index+6) 
  return newURL


}

export default getCroppedImage