import React from "react";
import Card from "./../Card/Card";

function products(props) {
  return (
    <div>
      <h1>{props.greeting}</h1>
      <div className="main container">
        <Card
          price={360}
          title="Arreglo de Rosas Rojas. (100 pzs)"
          detail="Las rosas rojas son exclusivas de los enamorados, sin embargo se pueden dar para mostrar nuestro respeto y admiración."
          img="https://img.freepik.com/foto-gratis/endecha-plana-hermosas-flores-color-rosa-colores_23-2149005546.jpg?w=996&t=st=1663569192~exp=1663569792~hmac=4db28d42273faee86a42e0988f97714aec75c7ff614a0f1050090f8832647e35"
       />
        <Card
          price={250}
          title="Arreglo de Rosas de Colores. (50 pzs)"
          detail="Rosa amarilla: Simboliza Simboliza juventud, alegría, cumpleaños, graduaciones. Rosa rosa: ternura, belleza, simpatía, franqueza."
          img="https://img.freepik.com/foto-gratis/endecha-plana-hermosas-flores-color-rosa-colores_23-2149005528.jpg?w=996&t=st=1663569296~exp=1663569896~hmac=e7a45d85824902bb9765d89d3ce00cd5b55f2393f90d05ac6de6ece11aa546d5"
        />
        <Card
          price={600}
          title="Ramo de Girasoles (12 pzs)"
          detail="Hermoso arreglo hecho con 12 girasoles es una muestra desbordante de cariño y felicidad."
          img="https://img.freepik.com/foto-gratis/primer-plano-mano-floristeria-girasol-amarillo-ramo_23-2148075333.jpg?w=1380&t=st=1663569480~exp=1663570080~hmac=1e0a4d914eccd858c6723b140636c200fc6ba6f88be8494bf3a85b4c2d5dc950"
        />
        <Card
          price={420}
          title="Ramo de Jazmines (100 pzs)"
          detail="La flor de jazmín cuenta con poderosos significados, todos con un gran carácter positivo, simbolo de cariño, amor eterno y sensualidad."
          img="https://img.freepik.com/foto-gratis/jazmin-mar-playa-boda-primavera_1203-4038.jpg?w=996&t=st=1663569527~exp=1663570127~hmac=dfcfbf0240a504b1eea58e7a45b2fbc93a28fe4742f3a80e813ed1e84fb28ea7"
        />

      </div>
    </div>
  );
}

export default products;