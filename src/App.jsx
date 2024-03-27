import './App.css'

function App() {

  return (
    <div className="container">
      <main>
        <article className="card">

          <figure>
            <img className='card__qr' src="/image-qr-code.png" width="288" height="288" alt="qr code" />
          </figure>

          <div className="card__text-section">
            <h1 className='card__title'>Improve your front-end skills by building projects</h1>
            <p className='card__description'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
          </div>

        </article>
      </main>
    </div>
  )
}

export default App
