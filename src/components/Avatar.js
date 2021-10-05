import logo from './images/predeterminado.png'

export const Avatar = ({ radio }, ancho ,tamaño) => {
    return (
        <div>

            <img src={logo} style={{

                borderRadius: radio,
                borderWidth: ancho,
                height: tamaño,
                width: tamaño,


            }}></img>





        </div>
    )
}
