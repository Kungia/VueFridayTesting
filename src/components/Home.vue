<template>
    <header id="main-display">
        <div class ="main-display">
            <div class="main-display-container">
                <div class="main-display-content">
                    <h1>Vår utställning</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        At ad ipsa voluptatum nesciunt illum, suscipit aut quos 
                        commodi numquam consectetur officiis dolor vitae sunt quasi consequuntur minima quod iste debitis.
                        Earum officiis illo eligendi, dolorem commodi rerum 
                        doloremque voluptas exercitationem ea molestias possimus. 
                        Eum, animi suscipit maiores veritatis ullam numquam nam minima
                        sequi dolorum obcaecati repudiandae fugit saepe ad voluptatibus.
                        Aspernatur animi corrupti tempora eaque assumenda dolore, 
                        sed numquam? Molestias deleniti vel ut provident perferendis 
                        quas voluptates blanditiis velit magni. Rem cum quae recusandae
                        tempora voluptatum dignissimos maxime beatae ipsum!
                    </p>    
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Home',
    components: {},
};
</script>

<style scoped>
#main-display{
  color: #fff;
  background: #333;
  padding: 2rem;
  position: relative;
}

#main-display:before {
  content: '';
  background: url('../assets/cars.jpg') no-repeat center center/cover;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.4;
}

#main-display .main-display-container{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center;
  height: 50vh;
}

#main-display .main-display-content {
  z-index: 1;
}

#main-display .main-display-content p {
  margin-bottom: 1rem;
}
</style>