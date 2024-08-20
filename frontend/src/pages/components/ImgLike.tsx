function ImgLike({width, height}: {width: number, height: number}) {

  return ( 
    <div 
      className='ImgLike' 
      style={{
        background: 'red', 
        width: width + 'px', 
        height: height + 'px'
      }}/>

  )
}

export default ImgLike
