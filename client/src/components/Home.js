function Home() {
  return (
    <div>
      {/* <h1>Home</h1>
        <p className='content is-medium'>Our Unique Potluck</p> */}
      <hr />
      <div class="row">
  <div class="column">
    <img src="./Assets/pexels-lina-kivaka-1813505.jpg" alt="Spread of food" />
  </div>
  <div class="column">
    <img src="./Assets/pexels-kaboompics-com-5929.jpg" alt="Spread of food" />
  </div>
  <div class="column">
    <img src="./Assets/pexels-flo-dahm-.jpg" alt="Spread of food" />
  </div>
</div>
      <div class="section">
        
        <div className="text">
        <div class="div1">Welcome to ur Potluck App where you can create a potluck and share
            with friends and family. Let the fiesta begin! </div>      
        </div>    
        {/* <img
          class="mb-7 center"
          id="avatar"
          src=""
          width="350"
          height="400"
          alt="Party Time"
        />      */}
        
      </div>
    </div>
  );
}

export default Home;
