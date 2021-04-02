<template>
    <header>
        <nav id="main-nav">
            <div class="container">
                <h1><router-link to='/'></router-link> Westcoast Cars</h1>
                <ul>
                     <li><router-link to='/'></router-link> Hem</li>
                     <li><router-link to='/about'></router-link>Om oss</li>
                     <li><router-link to='/sale'></router-link> Bilar</li>
                     <li><router-link to='/leasing'></router-link> Leasing</li>
                     <li><router-link to='/admin'></router-link>Admin</li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
export default {name: 'NavBar'}
</script>

<style scoped>
#main-nav{
  background: rgba(228, 223, 223, 0.856);
  position: sticky;
  top: 0;
  z-index: 2;
}

#main-nav .container {
  display: grid;
  grid-template-columns: 4fr 5fr;
  padding: 1rem;
  align-items: center;
}

#main-nav ul {
  justify-self:center;
  display: flex;
  font-weight: bold;
}

#main-nav ul li a{
  padding: 1rem;
}

#main-nav ul li a.active {
  background: var(--primary-color);
  color: var(--light-color);
}

#main-nav ul li a:hover {
  background: var(--light-color);
  color: var(--dark-color);
}

#main-nav .social{
  justify-self: center;
}

#main-nav .social i {
  color: #666;
  margin-right: 0.5rem;
}
</style>