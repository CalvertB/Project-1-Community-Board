import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 class="header">My Personal Top Ten Animated Series</h1>
      <h2 class="header2">By Calvert Blair</h2>
      <div class="card-container">
        <div class="card">
          <img src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ74w6JE3xoTJ1YTud6RtoQW46RnSPJ9EwwiZCoKkARwqV4d3N0_wKFsFfAmA1T9CdtO7E&usqp=CAU"></img>
          <div class="card-content">
            <h3 class="title">Avatar The Last Airbender</h3>
            <h4>Genre:Action Adventure Comedy </h4>
            <a href="https://www.youtube.com/watch?v=Of5aTru61U0" class="btn">Youtube Review</a>
          </div>
        </div>
        
        
          <div class="card">
            <img src= "https://i.pinimg.com/736x/e4/c7/d0/e4c7d0514772931dbddb711a90601a00.jpg"></img>
            <div class="card-content">
              <h3>Full Metel Alchemist Brotherhood</h3>
              <h4>Genre:Adventure Dark fantasy</h4>
              <a href="https://www.youtube.com/watch?v=gJOE2ddno6A" class="btn">Youtube Review</a>
            </div>
          </div>
        
          <div class="card">
            <img src= "https://i.pinimg.com/736x/e6/ba/0a/e6ba0a0e1a76e2fad592076f37bc50a3.jpg"></img>
            <div class="card-content">
              <h3>One Piece</h3>
              <h4>Action-adventure Comedy-drama</h4>
              <a href="https://www.youtube.com/watch?v=Pq6GMhYyf20" class="btn">Youtube Review</a>
            </div>
          </div>
          
          <div class="card">
            <img src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVJYoR3wmvljO-muA8tHrFVwE5kgSD1I63sw&usqp=CAU"></img>
            <div class="card-content">
              <h3>Attack on Titan</h3>
              <h4>Genre:Horror Political Drama</h4>
              <a href="https://www.youtube.com/watch?v=nFeAtKbsk9o" class="btn">Youtube Review</a>
            </div>
          </div>

          <div class="card">
            <img src= "https://i.pinimg.com/736x/e1/d5/ff/e1d5ff32a747cbb0fc8ec967d4bd9300.jpg"></img>
            <div class="card-content">
              <h3>Adventure Time</h3>
              <h4>Genre:Adventure Surreal comedy</h4>
              <a href="https://www.youtube.com/watch?v=ZbLIJrbUM-k" class="btn">Youtube Review</a>
            </div>
          </div>

          <div class="card">
            <img src= "https://lh3.googleusercontent.com/proxy/0MnseZJWxm9GQaaSLhTgVSwVEFzoq7TW7FHhL0L7JSVGzHfuEs3p170qXoi9v5Gl-N9le8OWqSpafp74NlSGCE0-86RQrEMoMFm4WHr5SbhGIBgQUVfMiEj3fEhDt1xVhcFztytOKmo-XaAAhRejldk8Bg"></img>
            <div class="card-content">
              <h3>SpongeBob Square Pants</h3>
              <a href="https://www.youtube.com/watch?v=cYu7Y52iiYI" class="btn">Youtube Review</a>
            </div>
          </div>
        
        
          <div class="card">
            <img src= "https://cdn.wallpapersafari.com/25/68/z2KTHL.jpg"></img>
            <div class="card-content">
              <h3>Jujutsu kaisen</h3>
              <h4>Genre:Comedy Surreal comedy</h4>
              <a href="https://www.youtube.com/watch?v=aqaV54wu5ZY" class="btn">Youtube Review</a>
            </div>
          </div>
        
          <div class="card">
            <img src= "https://storiesmediag.sportskeeda.com/wp-content/uploads/2023/07/04143440/HD-wallpaper-hunter-x-hunter-anime-hunterxhunter.jpg"></img>
            <div class="card-content">
              <h3>Hunter X Hunter</h3>
              <h4>Genre: Action Adventure Fantasy</h4>
              <a href="https://www.youtube.com/watch?v=AdnjkJISjzo" class="btn">Youtube Review</a>
            </div>
          </div>
          
          <div class="card">
            <img src= "https://w0.peakpx.com/wallpaper/526/42/HD-wallpaper-teen-titans-robin.jpg"></img>
            <div class="card-content">
              <h3>Teen Titans</h3>
              <h4>Genre: Action Adventure Comedy</h4>
              <a href="https://www.youtube.com/watch?v=Mi3REM2XUVQ" class="btn">Youtube Review</a>
            </div>
          </div>

          <div class="card">
            <img src= "https://i.pinimg.com/originals/bb/47/3b/bb473b091a1a2c02c5d19ca4d0f35dd3.jpg"></img>
            <div class="card-content">
              <h3>Amazing World of Gumball</h3>
              <h4>Genre: Adventure Surreal comedy</h4>
              <a href="https://www.youtube.com/watch?v=D8JlZ2aQBkw" class="btn">Youtube Review</a>
            </div>
          </div>
      </div>

    </>
  )
}

export default App
