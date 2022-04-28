const p_pre_registrer = (url) => `<div style="
margin: 0;
padding: 0;
box-sizing: border-box;
background: #232526;
/* fallback for old browsers */
background: -webkit-linear-gradient(to bottom, #414345, #232526);
/* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to bottom, #414345, #232526);
/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
height: auto;
padding: 50px;
width: 100%;
">
<div style="
  align-items: center;
  justify-content:center;
  margin: 0;
  ">
  <div style="
    display: flex;
    justify-content: center;
    align-items:center;
    flex-direction: column;
    ">
    <img src="https://zapphirofragancias.com/wp-content/uploads/2022/04/socios-scaled.jpg" alt="" style="
      display: flex;
      height:10rem;
      ">
  </div>
  <div style="
    width: 95%;
    padding: 10px;
    align-items: center;
    text-align: center;
    ">
    <h1 style="
      font-size: 4vh;
      color: white;
      display: inline-block;
      font-family: 'Open Sans', sans-serif;
      ">¡Gracias por inscribirte con nosotros!</h1>
    <br>
    <h2 style="
      color: white;
      font-size: 2.5vh;
      display: inline-block;
      font-family: 'Open Sans', sans-serif;
      ">¡somos la empresa ideal para ti!</h2>
    <div class="enlace">
      <a href="${url}" target="_self" rel="noopener noreferrer" style="
        display: inline-block;
        color: white;
        font-weight: 300;
        text-decoration: none;
        margin-top: 20px;
        border: 1px solid white;
        width: 40%;
        border-radius: 10px;
        padding: 10px 0;
        background: black;
        font-family: 'Open Sans', sans-serif;
        " font-family="sans-serif">Terminar mi inscripción</a>
    </div>
  </div>
</div>
</div>`;

module.exports = p_pre_registrer;