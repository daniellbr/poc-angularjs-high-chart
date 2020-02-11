function meuCallback() {
    var navbar = $("#navbar");
    navbar.html(
      `<a class="navbar-brand" href="#">Grafico</a>      
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="home.html">Home </a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">              
              <a class="dropdown-item" href="graf-positovo-negativo.html">Negativo Positivo</a>
              <a class="dropdown-item" href="graf-curva-linha.html">Curva Linha</a>
              <a class="dropdown-item" href="graf-piramide.html">Piramide</a>
              <a class="dropdown-item" href="evolucao-patrimonio.html">Evolução Patrimonio</a>
              <a class="dropdown-item" href="graf-donuts.html">Donut</a>
            </div>
          </li>
        </ul>          
      </div>`
      );
}

$(document).ready(meuCallback)


