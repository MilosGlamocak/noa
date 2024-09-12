import React from 'react'
import '../styles/SecondPage.scss'
import stock1 from '/images/Stock1.jpg'

function SecondPage() {
  return (
    <div className='secondPageCont'>
      <div className='textCont'>
        <h2>Helping businesses succeed</h2>
          <p className='description'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda aperiam ipsum, numquam, nulla voluptas error architecto quos officiis autem totam natus adipisci. Quibusdam et qui voluptatum sit laudantium. Officia a tempora et rem atque dignissimos, alias rerum velit commodi unde, voluptas obcaecati quo,
              ea totam beatae vitae iusto distinctio! Quidem rem ipsam alias? <br></br><br />Dolores quos debitis placeat omnis ducimus animi quidem ut ab iusto dolorem, ullam temporibus excepturi tenetur delectus ea! Harum magni ipsam perferendis quidem ducimus voluptate autem est blanditiis,<br /><br></br> libero nostrum et ipsa fugit, iste sed, reiciendis corrupti asperiores minus! Tempora ducimus perspiciatis labore, adipisci corrupti deleniti ea, quam vitae, nostrum assumenda placeat similique nam inventore.
          </p>
      </div> 
        <img src={stock1} alt=""/>
    </div>
  )
}

export default SecondPage